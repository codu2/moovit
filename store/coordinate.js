import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  origin: null,
  destination: null,
};

const coordinateSlice = createSlice({
  name: "coordinate",
  initialState,
  reducers: {
    getOrigin: (state, action) => {
      state.origin = action.payload;
    },
    getDestination: (state, action) => {
      state.destination = action.payload;
    },
  },
});

export const { getOrigin, getDestination } = coordinateSlice.actions;

export default coordinateSlice.reducer;
