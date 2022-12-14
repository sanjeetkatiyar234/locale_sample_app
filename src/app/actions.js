import {
  APP_INITIALIZED,
  CLEAR_ACTION_QUEUE,
  QUEUE_ACTION,
  RELOAD_APP,
} from './actionConstants';

export function setAppInitialized() {
  return {
    type: APP_INITIALIZED,
  };
}

export function queueAction(action) {
  return {
    type: QUEUE_ACTION,
    action,
  };
}

export function clearActionQueue() {
  return {
    type: CLEAR_ACTION_QUEUE,
  };
}

export function reloadApp() {
  return {
    type: RELOAD_APP,
  };
}