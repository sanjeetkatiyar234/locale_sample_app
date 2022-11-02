import {
    FETCH_PREDICTION_LAYER_DATA,
} from "app/actionConstants";
import { GET, PREDICTION_LAYER_DATA } from "app/apiConstants";

export function fetchPredictionLayerData() {
    return {
        types: FETCH_PREDICTION_LAYER_DATA,
        rel: GET,
        url: PREDICTION_LAYER_DATA,
        // headers: {
        //     "Content-Type": "application/json",
        //     'Access-Control-Allow-Origin': '*',
        //     }
    };
}