import { configureStore } from "@reduxjs/toolkit";

import coordinateReducer from "./coordinate";

export const store = configureStore({
  reducer: {
    coordinate: coordinateReducer,
  },
});
