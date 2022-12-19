import { configureStore } from "@reduxjs/toolkit";

import coordinateReducer from "./coordinate";
import authReducer from "./auth";

export const store = configureStore({
  reducer: {
    coordinate: coordinateReducer,
    auth: authReducer,
  },
});
