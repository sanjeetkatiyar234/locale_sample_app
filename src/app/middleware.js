import Promise from 'bluebird';
import omit from 'lodash/omit';
import mapValues from 'lodash/mapValues';
import createHttpWrapper from './http';
import { getApiRootUrl, objectToParamString } from './util';
import { CLEAR_ACTION_QUEUE, UPDATE_LOADING_COUNTER } from './actionConstants';
import { queueAction, reloadApp } from './actions';
import {  ServerErrors } from './errors/errorConstants';
import ClientError from './errors/ClientError';
import ServerError from './errors/ServerError';
import ForbiddenError from './errors/ForbiddenError';


export function reduxApiMiddleware(storeApi) {
  const http = createHttpWrapper();
  const { dispatch } = storeApi;

  return (next) => (action) => {
    const store = storeApi.getState();
    const { actions, types, type} = action;

   if (actions) {
      return Promise.all(actions.map((act) => handleAsyncAction(store, storeApi, act, http))).then(
        action.then
      );
    } else if (types) {
      return handleAsyncAction(store, storeApi, action, http);
    } else {
      if (type === CLEAR_ACTION_QUEUE) {
        // dispatch all queued actions
        store.app.appState.actionQueue.forEach((action) => dispatch(action));
      }
      // Normal action: pass it on
      return next(action);
    }
  };
}

function handleAsyncAction(store, storeApi, action, http) {
  const { dispatch } = storeApi;
  const apiActionType = action.types;
  const url = getUrl(action);
  if (!url) {
    // No url could be found, Queue the action up for later.
    dispatch(queueAction(action));
    return;
  }

  const suffixedTypes = ['PENDING', 'RECEIVED', 'FAILED'].map(
    (suffix) => `${action.types}_${suffix}`
  );
  const [requestType, receiveType, failureType] = suffixedTypes;

  // remove `types` so we can reuse the action without re-triggering this
  delete action.types;

  // dispatch PENDING action
  dispatch({ ...action, type: requestType });

  let statusCodeMap = getHandlers(action, receiveType, failureType, dispatch);

  if (action.requestId) {
    // This step needs to happen before handling the loaders
    // because even aborted actions need to be handled by the loader
    statusCodeMap = getCancellableStatusCodeMap(
      statusCodeMap,
      apiActionType,
      action.requestId,
      storeApi
    );
  }

  if (!action.ignoreLoader) {
    statusCodeMap = getLoaderStatusCodeMap(dispatch, statusCodeMap, action);
  }

  const apiOptions = { ...action, statusCodeMap };
  return http.callApi(url, apiOptions);
}

/**
 *
 * @param {object} statusCodeMap the statusCodeMap to wrap
 * @param {string} apiActionType The `types` value of the action
 * @param {string} requestId an id associated with the request
 * @param {StoreApi} storeApi the store api provided by redux
 */
export function getCancellableStatusCodeMap(statusCodeMap, apiActionType, requestId, { getState }) {
  const isCancelled = () => {
    const mostRecentRequestId = getState().app.requestIds[apiActionType];
    return requestId && requestId !== mostRecentRequestId;
  };

  const abortIfCanceled = (func) => (...args) => {
    if (isCancelled()) return;
    func(...args);
  };

  return mapValues(statusCodeMap, abortIfCanceled);
}

/**
 * Dispatches an action to update the specified loader by 1, and creates a new
 * status code map object that will decrement the specified loader when any
 * status code is returned.
 */
export function getLoaderStatusCodeMap(dispatch, statusCodeMap, action) {
  const loaderFieldName = action.loader || action.formToken || 'global';
  dispatch({
    type: UPDATE_LOADING_COUNTER,
    offset: 1,
    loader: loaderFieldName,
  });

  // override all mapped status codes to decrement loader
  return Object.keys(statusCodeMap).reduce((obj, status) => {
    obj[status] = (resp) => {
      dispatch({
        type: UPDATE_LOADING_COUNTER,
        offset: -1,
        loader: loaderFieldName,
      });
      return statusCodeMap[status](resp);
    };
    return obj;
  }, {});
}

/**
 Transform url and templatedUrl to pure url.
 */
function getUrl(action) {
  const { queryParams } = action;
  let { url,params,search } = action;

  if (url && params ) {
    Object.keys(params).forEach((param) => {
      url = url.replace(`{${param}}`, params[param]);
    });
  }
  
// if search is alreay params strings
  if (url && search) {
    url += search;
  }
  if (url && queryParams) {
    url += objectToParamString(queryParams);
  }

  return url;
}

// Combines the action's statusCodeMap with some reasonable defaults and handling
// for the receiveType and failureType.
export function getHandlers(action, receiveType, failureType, dispatch) {
  // Defaults for specific error codes should also call dispatch failure actions
  // and call provided error callback
  const errorCallback = (error) => {
    dispatch({ ...action, type: failureType, error });
    return action.statusCodeMap && action.statusCodeMap.error
      ? action.statusCodeMap.error(error)
      : error;
  };

  return {
    success: (response) => {
      const receivedAction = { ...action, type: receiveType, response };
      dispatch(receivedAction);

      return action.statusCodeMap && action.statusCodeMap.success
        ? action.statusCodeMap.success(response)
        : response;
    },
    error: errorCallback,
    401: (error) => {
      errorCallback(error);
      dispatch(reloadApp());
    },
    403: (error) => {
      errorCallback(error);
      throw new ForbiddenError();
    },
    503: (error) => {
      errorCallback(error);
      throw new ServerError(ServerErrors.SERVICE_UNAVAILABLE);
    },
    504: (error) => {
      errorCallback(error);
      throw new ServerError(ServerErrors.GATEWAY_TIMEOUT);
    },
    ...omit(action.statusCodeMap, ['success', 'error']),
  };
}
