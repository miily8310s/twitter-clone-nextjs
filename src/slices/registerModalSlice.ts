import { createSlice } from "@reduxjs/toolkit";

export interface RegisterModalSlice {
  isOpen: boolean;
}

const initialState: RegisterModalSlice = {
  isOpen: false,
};

export const registerModalSlice = createSlice({
  name: "registerModal",
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

export const { onOpen, onClose } = registerModalSlice.actions;

export default registerModalSlice.reducer;
