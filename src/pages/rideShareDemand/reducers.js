import { combineReducers } from "@reduxjs/toolkit";
import {
    FETCH_H3HEX_TO_ARC_LAYER_DATA_RECEIVED
} from "app/actionConstants";

//TODO remove default state
// const dummyValue=[{"start_time": "2022-01-03 03:30:00", "end_time": "2022-01-03 03:35:00", "vehicle_count": "2", "start_hex": "8743a02f5ffffff", "end_hex": "8743a0219ffffff"}, {"start_time": "2022-01-03 03:30:00", "end_time": "2022-01-03 03:35:00", "vehicle_count": "2", "start_hex": "8743a02f5ffffff", "end_hex": "8743a02f5ffffff"}, {"start_time": "2022-01-03 03:30:00", "end_time": "2022-01-03 03:35:00", "vehicle_count": "2", "start_hex": "8743a02f5ffffff", "end_hex": "8743a02e0ffffff"}, {"start_time": "2022-01-03 03:30:00", "end_time": "2022-01-03 03:35:00", "vehicle_count": "2", "start_hex": "8743a02f5ffffff", "end_hex": "8743a0201ffffff"}, {"start_time": "2022-01-03 03:30:00", "end_time": "2022-01-03 03:35:00", "vehicle_count": "2", "start_hex": "8743a02f5ffffff", "end_hex": "8743a02e3ffffff"}, {"start_time": "2022-01-03 03:30:00", "end_time": "2022-01-03 03:35:00", "vehicle_count": "2", "start_hex": "8743a02f5ffffff", "end_hex": "8743a020affffff"}, {"start_time": "2022-01-03 03:30:00", "end_time": "2022-01-03 03:35:00", "vehicle_count": "2", "start_hex": "8743a02f5ffffff", "end_hex": "8743a0220ffffff"}, {"start_time": "2022-01-03 03:30:00", "end_time": "2022-01-03 03:35:00", "vehicle_count": "2", "start_hex": "8743a02f5ffffff", "end_hex": "8743a02c6ffffff"}, {"start_time": "2022-01-03 03:30:00", "end_time": "2022-01-03 03:35:00", "vehicle_count": "2", "start_hex": "8743a02f5ffffff", "end_hex": "8743a0205ffffff"}, {"start_time": "2022-01-03 03:30:00", "end_time": "2022-01-03 03:35:00", "vehicle_count": "2", "start_hex": "8743a02f5ffffff", "end_hex": "8743a02c1ffffff"}];

function selectedArcLayerReducer(state = [], action) {
    switch (action.type) {
        case FETCH_H3HEX_TO_ARC_LAYER_DATA_RECEIVED:
            return (action.response?.body || [])?.map((row, id) => ({
                id,
                ...row,
            }));
        default:
            return state;
    }
}

export default combineReducers({
    selectedArcLayer: selectedArcLayerReducer,
});