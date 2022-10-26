import {combineReducers} from '@reduxjs/toolkit';
import { FETCH_QUERY_HIVE_DATA_RECEIVED, FETCH_H3HEX_LAYER_DATA_RECEIVED } from 'app/actionConstants';


function queryHiveReducer(state=[],action){
    switch (action.type) {
        case FETCH_QUERY_HIVE_DATA_RECEIVED:
            return (action.response?.items ||[])?.map((row,id)=>({
                id,
                ...row,
                start_loc:[+row['start_loc']['0'],+row['start_loc']['1']],
                end_loc:[+row['end_loc']['0'],+row['end_loc']['1']]
              })); 
        default:
            return state;
    }
}

function h3SampleDataReducer(state=[],action){
    switch (action.type) {
        case FETCH_H3HEX_LAYER_DATA_RECEIVED:
            return  (action.response?.body ||[])?.map((row,id)=>({
                id,
                ...row,
                starttime: new Date(row["starttime"]),
                endtime: new Date(row["endtime"]),
              })); ;
        default:
            return state;
    }
}

export default combineReducers({
queryHive:queryHiveReducer,
h3SampleData:h3SampleDataReducer
});