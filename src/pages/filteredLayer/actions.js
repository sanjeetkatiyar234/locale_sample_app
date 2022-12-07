import {
  FETCH_FILTERED_LAYER_DATA,
  UPDATE_SELECTED_COLOR,
} from "app/actionConstants";
import { FILTERED_LAYER_DATA, GET } from "app/apiConstants";

export function applySelectedColor(payload) {
  return {
    type: UPDATE_SELECTED_COLOR,
    payload,
  };
}
export function fetchFilteredLayerData() {
  return {
    types: FETCH_FILTERED_LAYER_DATA,
    rel: GET,
    url: FILTERED_LAYER_DATA,
  };
}
