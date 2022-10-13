import {combineReducers} from '@reduxjs/toolkit';
import { FETCH_QUERY_HIVE_DATA_RECEIVED, FETCH_SAMPLE_H3_DATA_RECEIVED } from 'app/actionConstants';


function queryHiveReducer(state=[],action){
    switch (action.type) {
        case FETCH_QUERY_HIVE_DATA_RECEIVED:
            return (action.response ||[])?.map((row,id)=>({
                id,
                ...row,
                dateTime: new Date(row["_c0"]),
                startPosition: [+row["first_lat"], +row["first_lon"]],
                endPosition: [+row["end_lat"], +row["end_lon"]],
              })); 
        default:
            return state;
    }
}

function h3SampleDataReducer(state=[],action){
    switch (action.type) {
        case FETCH_SAMPLE_H3_DATA_RECEIVED:
            return  (action.response ||[])?.map((row,id)=>({
                id,
                ...row,
                start: new Date(row["start"]),
                end: new Date(row["end"]),
                Count: +row["Count"],
              })); ;
        default:
            return state;
    }
}

export default combineReducers({
queryHive:queryHiveReducer,
h3SampleData:h3SampleDataReducer
});