import { createSlice } from "@reduxjs/toolkit";

export const alertSlice = createSlice({
  name: "alert",
  initialState: {
    value: {
      show: false,
      type: "",
      message: "",
    },
  },
  reducers: {
    showAlert: (state, action) => {
      state.value.show = true;
      state.value.type = action.payload.type;
      state.value.message = action.payload.message;
    },
    hideAlert: (state) => {
      state.value.show = false;
      state.value.type = "";
      state.value.message = "";
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;
