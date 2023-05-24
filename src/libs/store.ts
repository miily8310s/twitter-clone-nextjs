import { configureStore } from "@reduxjs/toolkit";
import loginModalReducer from "../slices/loginModalSlice";
import registerModalReducer from "../slices/registerModalSlice";

export const store = configureStore({
  reducer: {
    loginModal: loginModalReducer,
    registerModal: registerModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
