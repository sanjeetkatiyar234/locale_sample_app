import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

export const rightSidePanelFormSlice = createSlice({
  name: "rightSidePanelForm",
  initialState: {
    value: {
      daily_start_date: new moment(new Date("2022-01-03")),
      start_date: new moment(new Date("2022-01-03")),
      end_date: new moment(new Date("2022-01-30")),
    },
  },
  reducers: {
    handleChange: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },
    resetValue: (state) => {
      state.value = {
        daily_start_date: new moment(new Date("2022-01-03")),
        start_date: new moment(new Date("2022-01-03")),
        end_date: new moment(new Date("2022-01-30")),
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleChange, resetValue } = rightSidePanelFormSlice.actions;

export default rightSidePanelFormSlice.reducer;
