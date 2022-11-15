import { combineReducers } from "@reduxjs/toolkit";
import {
  FETCH_GEO_JSON_LAYER_DATA_RECEIVED,
  FETCH_PREDICTION_LAYER_DATA_RECEIVED,
} from "app/actionConstants";

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
      return {...action.response.data};
    default:
      return state;
  }
}

export default combineReducers({
  data: predictionLayerReducer,
  geoJsonData: geoJsonLayerReducer,
});
