import React from 'react';
import { CreatePost } from './create-post/create-post';
import { ViewPost } from './view-post/view-posts';
import styles from './posts.module.css';
export const Posts: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <CreatePost />
      </div>
      <div>
        <ViewPost />
      </div>
    </div>
  );
};
