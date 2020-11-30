import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CreatePost {
  title: string;
  message: string;
}

export interface Post {
  id: number;
  title: string;
  message: string;
}

export interface PostsState {
  posts: Post[];
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  error: null,
};

const posts = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {
    postActionFailed(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    postCreated(state, action: PayloadAction<CreatePost>) {
      const { title, message } = action.payload;
      state.posts.push({
        id: state.posts.length,
        title: title,
        message: message,
      });
      state.error = null;
    },
    postUpdated(state, action: PayloadAction<Post>) {
      const index = state.posts.map((x) => x.id).indexOf(action.payload.id);
      state.posts[index].title = action.payload.title;
      state.posts[index].message = action.payload.message;
    },
    postDeleted(state, action: PayloadAction<number>) {
      const index = state.posts.map((x) => x.id).indexOf(action.payload);
      state.posts.splice(index, 1);
    },
  },
});

export const {
  postCreated,
  postDeleted,
  postActionFailed,
  postUpdated,
} = posts.actions;
export default posts.reducer;
