import { postActionFailed, postCreated } from '../post-slice/posts-slice';
import { AppThunk } from '../../../../store/store';

export const createPost = (title: string, message: string): AppThunk => async (
  dispatch,
) => {
  try {
    dispatch(postCreated({ message, title }));
  } catch (err) {
    dispatch(postActionFailed((err as Error).message));
  }
};
