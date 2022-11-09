import { combineReducers } from "@reduxjs/toolkit";
import { FETCH_QUERY_HIVE_DATA_RECEIVED } from "app/actionConstants";

function queryHiveReducer(state = [], action) {
  switch (action.type) {
    case FETCH_QUERY_HIVE_DATA_RECEIVED:
      return (action.response.data?.body?.items || [])?.map((row, id) => ({
        id,
        ...row,
      }));
    default:
      return state;
  }
}

export default combineReducers({
  queryHive: queryHiveReducer,
});
