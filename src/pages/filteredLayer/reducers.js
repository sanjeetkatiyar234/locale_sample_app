import { combineReducers } from "@reduxjs/toolkit";
import {
  FETCH_FILTERED_LAYER_DATA_RECEIVED,
  RESET_FILTERED_LAYER_VIEW,
  UPDATE_FILTERED_LAYER_SELECTED_COLOR,
} from "app/actionConstants";
import rightSidePanelFormReducer from "./rightSidePanelFormSlice";

function filteredLayerDataReducer(state = [], action) {
  switch (action.type) {
    case FETCH_FILTERED_LAYER_DATA_RECEIVED:
      return action.response.data?.body || [];
    default:
      return state;
  }
}

const defaultSate = {
  primaryColor: [170, 255, 0, 255],
  secondaryColor: [144, 238, 144, 255],
};

function selectedColorReducer(state = defaultSate, action) {
  switch (action.type) {
    case UPDATE_FILTERED_LAYER_SELECTED_COLOR:
      return {
        ...state,
        ...action.payload,
      };
    case RESET_FILTERED_LAYER_VIEW:
      return { ...defaultSate };
    default:
      return state;
  }
}

export default combineReducers({
  data: filteredLayerDataReducer,
  rightSidePanelForm: rightSidePanelFormReducer,
  selectedColor: selectedColorReducer,
});
