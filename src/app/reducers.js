import { combineReducers } from "@reduxjs/toolkit";
import {
  APP_INITIALIZED,
  QUEUE_ACTION,
  CLEAR_ACTION_QUEUE,
  RELOAD_APP,
  UPDATE_LOADING_COUNTER,
  RESET_MAP_POSIITON,
} from "./actionConstants";

const defaultAppState = {
  initialized: false,
  actionQueue: [],
  resetMapPosition: false,
};
// TODO add side bar state to reducer
export function appStateReducer(state = defaultAppState, action) {
  switch (action.type) {
    case APP_INITIALIZED:
      return { ...state, initialized: true, reload: false };
    case CLEAR_ACTION_QUEUE:
      return { ...state, actionQueue: [] };
    case QUEUE_ACTION:
      return { ...state, actionQueue: [...state.actionQueue, action.action] };
    case RELOAD_APP:
      return { ...state, reload: true };
    //   case LOGOUT_PENDING:
    //     return { ...state, initialized: false };
    //   case LOGOUT_FAILED:
    //     return { ...state, initialized: true };
    case RESET_MAP_POSIITON:
      return { ...state, resetMapPosition: action.payload };
    default:
      return state;
  }
}

function loadingReducer(state = {}, action) {
  switch (action.type) {
    case UPDATE_LOADING_COUNTER:
      return {
        ...state,
        [action.loader]: Math.max(
          (state[action.loader] || 0) + action.offset,
          0
        ),
      };
    default:
      return state;
  }
}

export default combineReducers({
  appState: appStateReducer,
  loading: loadingReducer,
});
