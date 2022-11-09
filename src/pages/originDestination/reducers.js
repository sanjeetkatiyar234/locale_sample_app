import { combineReducers } from "@reduxjs/toolkit";
import {
  UPDATE_SELECTED_COLOR,
  FETCH_H3HEX_LAYER_DATA_RECEIVED,
} from "app/actionConstants";

const defaultSate = {
  primaryColor: [255, 0, 0],
  secondaryColor: [255, 255, 0],
};

function selectedColorReducer(state = defaultSate, action) {
  switch (action.type) {
    case UPDATE_SELECTED_COLOR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

function h3SampleDataReducer(state = [], action) {
  switch (action.type) {
    case FETCH_H3HEX_LAYER_DATA_RECEIVED:
      return (action.response.data?.body || [])?.map((row, id) => ({
        id,
        ...row,
      }));
    default:
      return state;
  }
}

export default combineReducers({
  selectedColor: selectedColorReducer,
  h3SampleData: h3SampleDataReducer,
});
