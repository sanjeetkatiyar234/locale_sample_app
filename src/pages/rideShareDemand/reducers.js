import { combineReducers } from "@reduxjs/toolkit";
import {
    FETCH_H3HEX_TO_ARC_LAYER_DATA_RECEIVED
} from "app/actionConstants";

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