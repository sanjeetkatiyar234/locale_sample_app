import {
    FETCH_H3HEX_TO_ARC_LAYER_DATA,
  } from "app/actionConstants";
  import {  GET, H3HEX_TO_ARC_LAYER,x_api_Key } from "app/apiConstants";
  
  export const arcLayerLoader = "arcLayerLoader";
  export function fetchH3ToArcLayerData(search) {
    return {
      types: FETCH_H3HEX_TO_ARC_LAYER_DATA,
      rel: GET,
      url: H3HEX_TO_ARC_LAYER,
      headers:{
       'x-api-key':x_api_Key
      },
      loader: arcLayerLoader,
      search
    };
  }