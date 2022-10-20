import { combineReducers } from "@reduxjs/toolkit";
import {
  UPDATE_SELECTED_COLOR
} from "app/actionConstants";

const defaultSate={
  primaryColor:[255,0,0],
  secondaryColor:[255, 255,0],
}

function  selectedColorReducer(state = {}, action) {
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

export default combineReducers({
    selectedColor:selectedColorReducer,
  });