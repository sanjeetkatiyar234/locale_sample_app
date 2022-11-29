import { createSlice } from "@reduxjs/toolkit";

export const filterTypeSlice = createSlice({
  name: "filterType",
  initialState: {
    value: "monthly",
  },
  reducers: {
    handleChange: (state, action) => {
      state.value = action.payload;
    },
    resetFilterType: (state) => {
      state.value = "monthly";
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleChange, resetFilterType } = filterTypeSlice.actions;

export default filterTypeSlice.reducer;
