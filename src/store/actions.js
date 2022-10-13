import {
  FETCH_QUERY_HIVE_DATA,
  FETCH_SAMPLE_H3_DATA,
} from "app/actionConstants";
import { CSV_FILE, GET, QUERY_HIVE_QUERY, SAMPLE_H3_DATA } from "app/apiConstants";


export const queryHiveDataLoader = "queryHiveDataLoader";
export function fetchQueryHiveData() {
  return {
    types: FETCH_QUERY_HIVE_DATA,
    rel: GET,
    url: QUERY_HIVE_QUERY,
    loader: queryHiveDataLoader,
    expectResponseBody:CSV_FILE,
  };
}

export const h3SampleDataLoader = "h3SampleDataLoader";
export function fetchH3SampleData() {
  return {
    types: FETCH_SAMPLE_H3_DATA,
    rel: GET,
    url: SAMPLE_H3_DATA,
    loader: h3SampleDataLoader,
    expectResponseBody:CSV_FILE,
  };
}
