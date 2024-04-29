import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSilice";

export const store = configureStore({
    reducer: {
      user: userReducer,
  },
});
