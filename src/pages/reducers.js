import { combineReducers } from "@reduxjs/toolkit";
import originDestinationReducers from './originDestination/reducers';
import rideShareDemandReducers from './rideShareDemand/reducers';
import predictionLayerReducers from './predictionLayer/reducers';

export default combineReducers({
    originDestination:originDestinationReducers,
    rideShareDemand:rideShareDemandReducers,
    predictionLayer:predictionLayerReducers,
  });