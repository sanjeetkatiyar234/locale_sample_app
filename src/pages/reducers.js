import { combineReducers } from "@reduxjs/toolkit";
import originDestinationReducers from './originDestination/reducers';

export default combineReducers({
    originDestination:originDestinationReducers,
  });