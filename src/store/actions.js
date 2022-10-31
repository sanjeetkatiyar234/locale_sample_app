import {
  FETCH_QUERY_HIVE_DATA,
  FETCH_H3HEX_LAYER_DATA,
} from "app/actionConstants";
import {  GET, QUERY_HIVE_QUERY, H3HEX_LAYER_DATA,x_api_Key } from "app/apiConstants";


export const queryHiveDataLoader = "queryHiveDataLoader";
export function fetchQueryHiveData() {
  return {
    types: FETCH_QUERY_HIVE_DATA,
    rel: GET,
    url: QUERY_HIVE_QUERY,
    headers:{
     'x-api-key':x_api_Key
    },
    loader: queryHiveDataLoader,
  };
}

export const h3SampleDataLoader = "h3SampleDataLoader";
export function fetchH3SampleData() {
  return {
    types: FETCH_H3HEX_LAYER_DATA,
    rel: GET,
    url: H3HEX_LAYER_DATA,
    headers:{
      'x-api-key':x_api_Key
     },
    loader: h3SampleDataLoader,
  };
}
