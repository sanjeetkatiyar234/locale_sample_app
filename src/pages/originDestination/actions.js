import {
    UPDATE_SELECTED_COLOR
  } from "app/actionConstants";

export function applySelectedColor(payload) {
    return {
      type: UPDATE_SELECTED_COLOR,
      payload
    };
  }