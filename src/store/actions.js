import { FETCH_QUERY_HIVE_DATA } from "app/actionConstants";
import { GET, QUERY_HIVE_QUERY, x_api_Key } from "app/apiConstants";

export const queryHiveDataLoader = "queryHiveDataLoader";
export function fetchQueryHiveData(filterTypeValue) {
  return {
    types: FETCH_QUERY_HIVE_DATA,
    rel: GET,
    url: QUERY_HIVE_QUERY,
    headers: {
      "x-api-key": x_api_Key,
    },
    queryParams: {
      view_type: filterTypeValue,
    },
    loader: queryHiveDataLoader,
  };
}
