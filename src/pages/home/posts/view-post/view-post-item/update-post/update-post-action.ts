import { postUpdated, postActionFailed } from '../../../post-slice/posts-slice';
import { AppThunk } from '../../../../../../store/store';

export const updatePost = (
  id: number,
  title: string,
  message: string,
): AppThunk => async (dispatch) => {
  try {
    dispatch(postUpdated({ id: id, title: title, message: message }));
  } catch (err) {
    dispatch(postActionFailed((err as Error).message));
  }
};
