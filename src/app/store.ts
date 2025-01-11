import { configureStore } from "@reduxjs/toolkit";
import postSlice from "../features/postSlics";
import menuSlice from "../features/menuSlice";

export const store = configureStore({
  reducer: {
    posts: postSlice,
    menu: menuSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
