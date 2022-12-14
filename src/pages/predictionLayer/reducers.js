import { combineReducers } from "@reduxjs/toolkit";
import {
  FETCH_GEO_JSON_LAYER_DATA_RECEIVED,
  FETCH_PREDICTION_LAYER_DATA_RECEIVED,
  UPDATE_PREDICTION_LAYER_SELECTED_COLOR,
} from "app/actionConstants";

const defaultSate = {
  primaryColor: [255, 0, 0],
  secondaryColor: [255, 255, 0],
};

function selectedColorReducer(state = defaultSate, action) {
  switch (action.type) {
    case UPDATE_PREDICTION_LAYER_SELECTED_COLOR:
      return {
        ...state,
        ...action.payload,
      };
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
