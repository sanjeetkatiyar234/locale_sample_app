import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";
// start_time=&end_time=2022-12-06%2018:30:10

export const rightSidePanelFormSlice = createSlice({
  name: "rightSidePanelForm",
  initialState: {
    value: {
      countKey: "-1",
      daily_start_date: new moment(new Date("2023-01-02")),
      start_date: new moment(new Date("2023-01-02")),
      end_date: new moment(new Date("2023-01-30")),
    },
  },
  reducers: {
    handleChange: (state, action) => {
      state.value = { ...state.value, ...action.payload };
    },
    resetValue: (state) => {
      state.value = {
        countKey: "-1",
        daily_start_date: new moment(new Date("2023-01-02")),
        start_date: new moment(new Date("2023-01-02")),
        end_date: new moment(new Date("2023-01-30")),
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleChange, resetValue } = rightSidePanelFormSlice.actions;

export default rightSidePanelFormSlice.reducer;
