import fetch from 'isomorphic-fetch';
import {  csvParse } from "d3";
import Promise from 'bluebird';
import { GET,CSV_FILE } from 'app/apiConstants';
import ClientError from './errors/ClientError';
import ServerError from './errors/ServerError';
import { objectToParamString } from './util';

const defaultHeaders = {
  'Content-Type': 'application/json',
};

class HttpWrapper {
  // Attempts to find a callback function mapped to the passed HTTP status code.
  // If none is found then it looks for a `success` or `error` status and
  // finally falls back to the _defaultHttpHandler.
  _getResponseHandler(response, statusCodeMap = {}) {
    // first check for a status code matching the exact response status code
    let callback = statusCodeMap[response.status];

    if (!callback) {
      if (response.ok && statusCodeMap.success) {
        callback = statusCodeMap.success;
      } else if (!response.ok && statusCodeMap.error) {
        callback = statusCodeMap.error;
      }
    }

    return callback || this._defaultHttpHandler(response);
  }

  // Creates the options for the fetch method based on method, payload, and headers
  // passed. Some constants are used for the headers, which can be overridden.
  _getFetchOptions(method, payload, headers, useDefaultHeaders = true, stringify = true) {
    const options = {
      method,
      // mode: 'no-cors',
      // credentials: 'include', // use 'same-origin' if we disable CORS
    };

    options.headers = useDefaultHeaders ? { ...defaultHeaders, ...headers } : { ...headers };

    // Set body
    if (method === 'GET' && payload !== undefined) {
      throw new ClientError('GET requests cannot have body');
    } else if (options.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
      const paramStr = objectToParamString(payload);
      options.body = paramStr.substring(1); // remove leading ?
    } else if (stringify) {
      options.body = JSON.stringify(payload);
    } else {
      options.body = payload;
    }

    return options;
  }

  // By default return a function that returns the response (as a Promise) for all
  // HTTP codes greater than 200 and less than 300, and throw an Error containing
  // the response.statusText for everything else.
  _defaultHttpHandler(response) {
    if (response.ok) {
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

    const upperMethod = method.toUpperCase();
    if (['DELETE', 'GET', 'PATCH', 'POST', 'PUT'].indexOf(upperMethod) < 0) {
      throw new ClientError(`Invalid http method ${upperMethod}.`);
    }

    // Default DELETEs to not expect a response body, others default to true,
    // but if a value is passed always use that.
    let expectResponseBody;
    if (options.expectResponseBody === undefined) {
      expectResponseBody = upperMethod !== 'DELETE';
    } else {
      expectResponseBody = options.expectResponseBody;
    }

    let initialResponse;
    const promise = Promise.resolve(
      fetch(
        url,
        this._getFetchOptions(
          upperMethod,
          payload,
          headers,
          options.stringify,
          options.useDefaultHeaders
        )
      )
        .then((response) => {
          // hold on to the initial response so we can use it later to look at the
          // http status codes, headers, etc.
          initialResponse = response;
          return expectResponseBody === CSV_FILE ? (response.text()) :(expectResponseBody ? response.json() : response);
        })
        .then((payload) => {
             const formattedPayLoad= expectResponseBody === CSV_FILE? csvParse(payload) : payload;
          return this._getResponseHandler(initialResponse, statusCodeMap)(formattedPayLoad);
        })
        .catch((error) => {
          if (initialResponse) {
            console.log(
              `An Error ocurred while fetching. Response status was: ${initialResponse.status}.`,
              error
            );
          } else {
            console.log('An Error ocurred while fetching.', error);
          }
          // if the request fails, pass that to the handler, otherwise pass the body of the error
          const response = initialResponse || error;
          return this._getResponseHandler(response, statusCodeMap)(error);
        })
    );

    chain.forEach((item) => promise.then((resp) => item(resp)));

    return promise;
  }
}

const createHttpWrapper = () => new HttpWrapper();

export default createHttpWrapper;

