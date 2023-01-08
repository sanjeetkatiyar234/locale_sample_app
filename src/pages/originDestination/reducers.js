import { combineReducers } from "@reduxjs/toolkit";
import {
  UPDATE_SELECTED_COLOR,
  COMBINE_H3HEX_LAYER_DATA,
  FIRST_FETCH_H3HEX_LAYER_DATA_RECEIVED,
  SECOND_FETCH_H3HEX_LAYER_DATA_RECEIVED,
  THIRD_FETCH_H3HEX_LAYER_DATA_RECEIVED,
  RESET_ORIGIN_DESTINATION_VIEW,
} from "app/actionConstants";
import rightSidePanelFormReducer from "./rightSidePanelFormSlice";

const defaultSate = {
  primaryColor: [170, 255, 0, 255],
  secondaryColor: [144, 238, 144, 255],
};

function selectedColorReducer(state = defaultSate, action) {
  switch (action.type) {
    case UPDATE_SELECTED_COLOR:
      return {
        ...state,
        ...action.payload,
      };
    case RESET_ORIGIN_DESTINATION_VIEW:
      return { ...defaultSate };
    default:
      return state;
  }
}

const defaultState = [];

function h3SampleDataReducer(state = defaultState, action) {
  switch (action.type) {
    case FIRST_FETCH_H3HEX_LAYER_DATA_RECEIVED:
      return action.response.data?.body?.data || [];
    default:
      return state;
  }
}

export default combineReducers({
  selectedColor: selectedColorReducer,
  data: h3SampleDataReducer,
  rightSidePanelForm: rightSidePanelFormReducer,
});
