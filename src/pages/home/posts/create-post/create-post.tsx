import React, { ReactElement, useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from './create-post-action';
import styles from './create-post.module.css';
export const CreatePost: React.FC = (): ReactElement => {
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createPost(title, message));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className={styles.formInput}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          name="title"
        />
        <div>Message</div>
        <input
          className={styles.formInput}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
        />
        <input className={styles.formInput} type="submit" value="Add post" />
      </form>
    </div>
  );
};
