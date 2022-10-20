import { combineReducers } from "@reduxjs/toolkit";
import { reducer as formReducer } from 'redux-form'
import appReducer from './reducers';
import storeReducer from 'store/reducers';
import filterTypeReducer from "components/dropDown/filterTypeSlice";

const rootReducer = combineReducers({
    app: appReducer,
    form: formReducer,
    filterType: filterTypeReducer,
    data:storeReducer
    });

 export default rootReducer;   