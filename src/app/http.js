import axios from 'axios';
import Promise from 'bluebird';
import { GET } from 'app/apiConstants';
import ClientError from './errors/ClientError';
import ServerError from './errors/ServerError';
class HttpWrapper {
  // Attempts to find a callback function mapped to the passed HTTP status code.
  // If none is found then it looks for a `success` or `error` status and
  // finally falls back to the _defaultHttpHandler.
  _getResponseHandler(response, statusCodeMap = {}) {
    // first check for a status code matching the exact response status code
    let callback = statusCodeMap[response.status];
  
    if (!callback) {
      if ((response.status=== 200 )&& statusCodeMap.success) {
        callback = statusCodeMap.success;
      } else if ((response.status!== 200)&& statusCodeMap.error) {
        callback = statusCodeMap.error;
      }
    }

    return callback || this._defaultHttpHandler(response);
  }

  // Creates the axios config
  _getAxiosConfigObject(url,method, data, headers) {
   
    return{
      url,
      method,
      headers,
      data,
    };
  }

  // By default return a function that returns the response (as a Promise) for all
  // HTTP codes greater than 200 and less than 300, and throw an Error containing
  // the response.statusText for everything else.
  _defaultHttpHandler(response) {
    if (response.status === 200) {
      return (x) => x;
    } else {
      throw new ServerError(response.statusText);
    }
  }

  /**
   * with the URL
   * async request based on the other options passed. Options are:
   *
   * @param {String} url - the URL to use
   * @param {Object} options -
   * statusCodeMap - map of status code to function fired when that code is returned
   *    {
   *      200: () => dispatch(handleSuccess()),
   *      404: () => dispatch(handleError()),
   *    }
   * rel - get|post|put|delete - Used to derive HTTP method.
   * params - URL parameters
   * headers - Additional headers
   * chain - Array of other actions to call after the initial fetch. Each item in
   *  the array will be called in a separate promise `.then` block.
   *
   */
  callApi(url, options = {}) {
    const { statusCodeMap, rel = GET, payload, headers, chain = [] } = options;
    const method = rel;

    if (['delete', 'get', 'patch', 'post', 'put'].indexOf(method) < 0) {
      throw new ClientError(`Invalid http method ${method}.`);
    }

    // let initialResponse;
    const promise = Promise.resolve(
      axios(
        this._getAxiosConfigObject(
          url,
          method,
          payload,
          headers
        )
      ).then((response) => {
          return this._getResponseHandler(response, statusCodeMap)(response);
        })
        .catch((error) => {
          // if (initialResponse) {
          //   console.log(
          //     `An Error ocurred while fetching. Response status was: ${initialResponse.status}.`,
          //     error
          //   );
          // } else {
          //   console.log('An Error ocurred while fetching.', error);
          // }
          // if the request fails, pass that to the handler, otherwise pass the body of the error
          // const response = initialResponse || error;
          return this._getResponseHandler(error, statusCodeMap)(error);
        })
    );

    chain.forEach((item) => promise.then((resp) => item(resp)));

    return promise;
  }
}

const createHttpWrapper = () => new HttpWrapper();

export default createHttpWrapper;

