import { configureStore } from "@reduxjs/toolkit";
import filterTypeReducer from "./components/dropDown/filterTypeSlice";

export default configureStore({
  reducer: {
    filterType: filterTypeReducer,
  },
});
