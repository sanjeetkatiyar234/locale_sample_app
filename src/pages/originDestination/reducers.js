import { combineReducers } from "@reduxjs/toolkit";
import {
  UPDATE_SELECTED_COLOR,
  COMBINE_H3HEX_LAYER_DATA,
  FIRST_FETCH_H3HEX_LAYER_DATA_RECEIVED,
  SECOND_FETCH_H3HEX_LAYER_DATA_RECEIVED,
  THIRD_FETCH_H3HEX_LAYER_DATA_RECEIVED,
} from "app/actionConstants";

const defaultSate = {
  primaryColor: [255, 0, 0],
  secondaryColor: [255, 255, 0],
};

function selectedColorReducer(state = defaultSate, action) {
  switch (action.type) {
    case UPDATE_SELECTED_COLOR:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

const defaultState = {
  first: [],
  second: [],
  third: [],
  combine: [],
};

function h3SampleDataReducer(state = defaultState, action) {
  switch (action.type) {
    case FIRST_FETCH_H3HEX_LAYER_DATA_RECEIVED:
      return { ...state, first: action.response.data?.body };
    case SECOND_FETCH_H3HEX_LAYER_DATA_RECEIVED:
      return { ...state, second: action.response.data?.body };
    case THIRD_FETCH_H3HEX_LAYER_DATA_RECEIVED:
      return { ...state, third: action.response.data?.body };
    case COMBINE_H3HEX_LAYER_DATA:
      return {...state,combine:action.payload};
    default:
      return state;
  }
}

export default combineReducers({
  selectedColor: selectedColorReducer,
  data: h3SampleDataReducer,
});
