import { createSlice } from "@reduxjs/toolkit";

export interface EditModalSlice {
  isOpen: boolean;
}

const initialState: EditModalSlice = {
  isOpen: false,
};

export const editModalSlice = createSlice({
  name: "editModal",
  initialState,
  reducers: {
    onOpen: (state) => {
      debugger;
      state.isOpen = true;
    },
    onClose: (state) => {
      state.isOpen = false;
    },
  },
});

export const { onOpen, onClose } = editModalSlice.actions;

export default editModalSlice.reducer;
