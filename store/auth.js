import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
  },
  reducers: {
    authenticate: (state, action) => {
      state.token = action.payload;
      AsyncStorage.setItem("token", action.payload);
    },
    logout: (state) => {
      state.token = null;
      AsyncStorage.removeItem("token");
    },
  },
});

export const { authenticate, logout } = AuthSlice.actions;

export default AuthSlice.reducer;
