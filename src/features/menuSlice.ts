import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    setToggle: (state, action: PayloadAction<boolean>) => {
      state.toggle = action.payload;
    },
  },
});

export const { setToggle } = menuSlice.actions;
export default menuSlice.reducer;
