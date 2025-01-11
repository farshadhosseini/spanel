import { IPost } from "./../interfaces/posts";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PostSlice {
  posts: IPost[];
}

const initialState: PostSlice = {
  posts: [],
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    setPosts: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload;
    },
    addPost: (state, action: PayloadAction<IPost>) => {
      state.posts = [action.payload, ...state.posts];
    },
    removePost: (state, action: PayloadAction<Number>) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    updatePost: (state, action: PayloadAction<IPost>) => {
      const index = state.posts.findIndex(
        (post) => post.id === action.payload.id
      );
      state.posts[index] = action.payload;
    },
  },
});

export const { setPosts, addPost, removePost, updatePost } = postSlice.actions;
export default postSlice.reducer;
