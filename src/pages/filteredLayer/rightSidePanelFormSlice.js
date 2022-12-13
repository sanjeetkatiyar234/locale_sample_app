import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export const rightSidePanelFormSlice = createSlice({
  name: "rightSidePanelForm",
  initialState: {
    value: { countKey: "-1", date: new moment() },
  },
  reducers: {
    handleChange: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },
    resetValue: (state) => {
      state.value = { countKey: "-1", date: new moment() };
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleChange, resetValue } = rightSidePanelFormSlice.actions;

export default rightSidePanelFormSlice.reducer;
