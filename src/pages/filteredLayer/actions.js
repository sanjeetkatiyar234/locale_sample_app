import { FETCH_FILTERED_LAYER_DATA } from "app/actionConstants";
import { FILTERED_LAYER_DATA, GET } from "app/apiConstants";

export function fetchFilteredLayerData() {
  return {
    types: FETCH_FILTERED_LAYER_DATA,
    rel: GET,
    url: FILTERED_LAYER_DATA,
  };
}
