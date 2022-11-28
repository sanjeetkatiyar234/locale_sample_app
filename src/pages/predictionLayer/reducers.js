import { combineReducers } from "@reduxjs/toolkit";
import {
  FETCH_GEO_JSON_LAYER_DATA_RECEIVED,
  FETCH_PREDICTION_LAYER_DATA_RECEIVED,
  UPDATE_PREDICTION_LAYER_SELECTED_COLOR,
  RESET_PREDICTION_LAYER_VIEW,
} from "app/actionConstants";

const defaultSate = {
  mainViewPrimaryColor: [170, 255, 0, 127],
  mainViewSecondaryColor: [144, 238, 144, 127],
  miniViewPrimaryColor: [170, 255, 0, 127],
  miniViewSecondaryColor: [144, 238, 144, 127],
};

function selectedColorReducer(state = defaultSate, action) {
  switch (action.type) {
    case UPDATE_PREDICTION_LAYER_SELECTED_COLOR:
      return {
        ...state,
        ...action.payload,
      };
    case RESET_PREDICTION_LAYER_VIEW:
      return { ...defaultSate };
    default:
      return state;
  }
}

function predictionLayerReducer(state = [], action) {
  switch (action.type) {
    case FETCH_PREDICTION_LAYER_DATA_RECEIVED:
      return [...action.response.data];
    default:
      return state;
  }
}

function geoJsonLayerReducer(state = {}, action) {
  switch (action.type) {
    case FETCH_GEO_JSON_LAYER_DATA_RECEIVED:
      return { ...action.response.data };
    default:
      return state;
  }
}

export default combineReducers({
  data: predictionLayerReducer,
  geoJsonData: geoJsonLayerReducer,
  selectedColor: selectedColorReducer,
});
