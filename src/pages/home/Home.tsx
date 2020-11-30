import React from 'react';
import { Posts } from './posts/posts';
import styles from './Home.module.css';
export const Home: React.FC = () => {
  return (
    <div>
      <h1 className={styles.heading}>Redux Toolkit TypeScript Example</h1>
      <Posts />
    </div>
  );
};
