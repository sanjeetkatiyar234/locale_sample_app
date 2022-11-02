import { combineReducers } from "@reduxjs/toolkit";
import {
    FETCH_QUERY_HIVE_DATA_RECEIVED,
    FETCH_H3HEX_LAYER_DATA_RECEIVED,
} from "app/actionConstants";

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

function h3SampleDataReducer(state = [], action) {
    switch (action.type) {
        case FETCH_H3HEX_LAYER_DATA_RECEIVED:
            return (action.response.data?.body || [])?.map((row, id) => ({
                id,
                ...row,
            }));
        default:
            return state;
    }
}

export default combineReducers({
    queryHive: queryHiveReducer,
    h3SampleData: h3SampleDataReducer,
});
