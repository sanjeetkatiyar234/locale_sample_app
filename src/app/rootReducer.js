import { combineReducers } from "@reduxjs/toolkit";
import { reducer as formReducer } from 'redux-form'
import appReducer from './reducers';
import storeReducer from 'store/reducers';
import filterTypeReducer from "components/dropDown/filterTypeSlice";
import pageReducers from '../pages/reducers';

const rootReducer = combineReducers({
    app: appReducer,
    form: formReducer,
    filterType: filterTypeReducer,
    data:storeReducer,
    pages:pageReducers,
    });

 export default rootReducer;   