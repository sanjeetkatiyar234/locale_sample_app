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
  },
});

// Action creators are generated for each case reducer function
export const { handleChange } = filterTypeSlice.actions;

export default filterTypeSlice.reducer;
