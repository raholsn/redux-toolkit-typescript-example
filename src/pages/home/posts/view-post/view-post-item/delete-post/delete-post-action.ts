import { postDeleted, postActionFailed } from '../../../post-slice/posts-slice';
import { AppThunk } from '../../../../../../store/store';

export const deletePost = (id: number): AppThunk => async (dispatch) => {
  try {
    dispatch(postDeleted(id));
  } catch (err) {
    dispatch(postActionFailed((err as Error).message));
  }
};
