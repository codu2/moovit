import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transport: null,
  origin: null,
  destination: null,
  distance: null,
  duration: null,
  address: {
    start: null,
    end: null,
  },
};

const coordinateSlice = createSlice({
  name: "coordinate",
  initialState,
  reducers: {
    selectTransport: (state, action) => {
      state.transport = action.payload;
    },
    getOrigin: (state, action) => {
      state.origin = action.payload;
    },
    getDestination: (state, action) => {
      state.destination = action.payload;
    },
    getDistanceAndDuration: (state, action) => {
      state.distance = action.payload.distance;
      state.duration = action.payload.duration;
    },
    getAddress: (state, action) => {
      state.address = { start: action.payload.start, end: action.payload.end };
    },
  },
});

export const {
  selectTransport,
  getOrigin,
  getDestination,
  getDistanceAndDuration,
  getAddress,
} = coordinateSlice.actions;

export default coordinateSlice.reducer;
