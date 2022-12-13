import { createSlice } from "@reduxjs/toolkit";

export const viewFilterSlice = createSlice({
  name: "viewFilter",
  initialState: {
    value: "daily",
  },
  reducers: {
    handleChange: (state, action) => {
      state.value = action.payload;
    },
    resetFilterView: (state) => {
      state.value = "daily";
    },
  },
});

// Action creators are generated for each case reducer function
export const { handleChange, resetFilterView } = viewFilterSlice.actions;

export default viewFilterSlice.reducer;
