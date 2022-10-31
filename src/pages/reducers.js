import { combineReducers } from "@reduxjs/toolkit";
import originDestinationReducers from './originDestination/reducers';
import rideShareDemandReducers from './rideShareDemand/reducers';

export default combineReducers({
    originDestination:originDestinationReducers,
    rideShareDemand:rideShareDemandReducers,
  });