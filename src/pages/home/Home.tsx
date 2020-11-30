import React from 'react';
import { Posts } from './posts/posts';
export const Home: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Redux Toolkit TypeScript Example</h1>
      <Posts />
    </div>
  );
};
