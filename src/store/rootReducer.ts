import { combineReducers } from '@reduxjs/toolkit';

import postReducer from '../pages/home/posts/post-slice/posts-slice';

const rootReducer = combineReducers({
  postSlice: postReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
