import { createSlice } from "@reduxjs/toolkit";

export interface LoginModalSlice {
  isOpen: boolean;
}

const initialState: LoginModalSlice = {
  isOpen: false,
};

export const loginModalSlice = createSlice({
  name: "loginModal",
  initialState,
  reducers: {
    onOpen: (state) => {
      state.isOpen = true;
    },
    onClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { onOpen, onClose } = loginModalSlice.actions;

export default loginModalSlice.reducer;
