import { combineReducers } from "@reduxjs/toolkit";
import appReducer from './reducers';
import storeReducer from 'store/reducers';
import filterTypeReducer from "components/dropDown/filterTypeSlice";

const rootReducer = combineReducers({
    app: appReducer,
    filterType: filterTypeReducer,
    data:storeReducer
    });

 export default rootReducer;   