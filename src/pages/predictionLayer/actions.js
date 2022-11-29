import {
  CHANGE_TOGGLE_VIEW,
  FETCH_GEO_JSON_LAYER_DATA,
  FETCH_PREDICTION_LAYER_DATA,
  RESET_PREDICTION_LAYER_VIEW,
  RESET_TOGGLE_VIEW,
  UPDATE_PREDICTION_LAYER_SELECTED_COLOR,
} from "app/actionConstants";
import {
  GEO_JSON_LAYER_DATA,
  GET,
  PREDICTION_LAYER_DATA,
} from "app/apiConstants";

export function applySelectedColor(payload) {
  return {
    type: UPDATE_PREDICTION_LAYER_SELECTED_COLOR,
    payload,
  };
}

export function fetchPredictionLayerData() {
  return {
    types: FETCH_PREDICTION_LAYER_DATA,
    rel: GET,
    url: PREDICTION_LAYER_DATA,
    // headers: {
    //     "Content-Type": "application/json",
    //     'Access-Control-Allow-Origin': '*',
    //     }
  };
}

export function fetchGeoJsonLayerData() {
  return {
    types: FETCH_GEO_JSON_LAYER_DATA,
    rel: GET,
    url: GEO_JSON_LAYER_DATA,
  };
}

export function resetPredictionLayerView() {
  return {
    type: RESET_PREDICTION_LAYER_VIEW,
  };
}

export function changeToggleView(payload) {
  return {
    type: CHANGE_TOGGLE_VIEW,
    payload,
  };
}
export function resetToggleView() {
  return {
    type: RESET_TOGGLE_VIEW,
  };
}
