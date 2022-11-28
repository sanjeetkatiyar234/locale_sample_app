import {
  COMBINE_H3HEX_LAYER_DATA,
  FIRST_FETCH_H3HEX_LAYER_DATA,
  RESET_ORIGIN_DESTINATION_VIEW,
  SECOND_FETCH_H3HEX_LAYER_DATA,
  THIRD_FETCH_H3HEX_LAYER_DATA,
} from "app/actionConstants";
import { GET, H3HEX_LAYER_DATA, x_api_Key } from "app/apiConstants";
import { UPDATE_SELECTED_COLOR } from "app/actionConstants";

export function applySelectedColor(payload) {
  return {
    type: UPDATE_SELECTED_COLOR,
    payload,
  };
}

// export const h3SampleDataLoader = "h3SampleDataLoader";
export function fetchH3SampleData1(queryParams) {
  return {
    types: FIRST_FETCH_H3HEX_LAYER_DATA,
    rel: GET,
    url: H3HEX_LAYER_DATA,
    headers: {
      "x-api-key": x_api_Key,
    },
    // loader: h3SampleDataLoader,
    queryParams,
  };
}
export function fetchH3SampleData2(search) {
  return {
    types: SECOND_FETCH_H3HEX_LAYER_DATA,
    rel: GET,
    url: H3HEX_LAYER_DATA,
    headers: {
      "x-api-key": x_api_Key,
    },
    // loader: h3SampleDataLoader,
    search,
  };
}
export function fetchH3SampleData3(search) {
  return {
    types: THIRD_FETCH_H3HEX_LAYER_DATA,
    rel: GET,
    url: H3HEX_LAYER_DATA,
    headers: {
      "x-api-key": x_api_Key,
    },
    // loader: h3SampleDataLoader,
    search,
  };
}

export function combineH3SampleData3(payload) {
  return {
    type: COMBINE_H3HEX_LAYER_DATA,
    payload,
  };
}
export function resetOriginDestinationView() {
  return {
    type: RESET_ORIGIN_DESTINATION_VIEW,
  };
}
