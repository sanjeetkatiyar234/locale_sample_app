import {
  FIRST_FETCH_H3HEX_LAYER_DATA,
  RESET_ORIGIN_DESTINATION_VIEW,
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

export function resetOriginDestinationView() {
  return {
    type: RESET_ORIGIN_DESTINATION_VIEW,
  };
}
