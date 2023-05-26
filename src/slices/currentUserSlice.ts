import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "@supabase/supabase-js";

export interface CurrentUserSlice {
  currentUser: User | null;
  isLoading: boolean;
}

const initialState: CurrentUserSlice = {
  currentUser: null,
  isLoading: false,
};

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    onCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
      state.isLoading = !!action.payload;
    },
    resetCurrentUser: (state) => {
      state = initialState;
    },
  },
});

export const { onCurrentUser, resetCurrentUser } = currentUserSlice.actions;

export default currentUserSlice.reducer;
