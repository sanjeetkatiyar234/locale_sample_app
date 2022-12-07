import { combineReducers } from "@reduxjs/toolkit";
import { FETCH_FILTERED_LAYER_DATA_RECEIVED } from "app/actionConstants";
import rightSidePanelFormReducer from "./rightSidePanelFormSlice";

function filteredLayerDataReducer(state = [], action) {
  switch (action.type) {
    case FETCH_FILTERED_LAYER_DATA_RECEIVED:
      return action.response.data?.body || [];
    default:
      return state;
  }
}

export default combineReducers({
  data: filteredLayerDataReducer,
  rightSidePanelForm: rightSidePanelFormReducer,
});
