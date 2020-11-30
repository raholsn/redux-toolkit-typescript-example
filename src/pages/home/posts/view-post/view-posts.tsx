import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/rootReducer';
import styles from './view-post.module.css';
import { ViewPostItem } from './view-post-item/view-post-item';

export const ViewPost: React.FC = () => {
  const postSlice = useSelector((state: RootState) => state.postSlice);

  return (
    <div className={styles.container}>
      {postSlice.posts?.map(
        (value): JSX.Element => {
          return (
            <ViewPostItem
              key={value.id}
              id={value.id}
              titleProp={value.title}
              messageProp={value.message}
            />
          );
        },
      )}
    </div>
  );
};
