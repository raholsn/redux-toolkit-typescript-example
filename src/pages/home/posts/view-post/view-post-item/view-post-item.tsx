import React, { useState } from 'react';
import styles from './view-post-item.module.css';
import { DeletePost } from './delete-post/delete-post';
import { UpdatePost } from './update-post/update-post';

export const ViewPostItem: React.FC<{
  id: number;
  titleProp: string;
  messageProp: string;
}> = ({ id, titleProp, messageProp }) => {
  const [editMode, setEditMode] = useState(false);

  const [title, setTitle] = useState(titleProp);
  const [message, setMessage] = useState(messageProp);

  const toggleEditMode = (title: string, message: string) => {
    if (!editMode) {
      setTitle(title);
      setMessage(message);
    }
    setEditMode(!editMode);
  };

  return (
    <div key={id} className={styles.card}>
      <div className={styles.cardTitleContainer}>
        {!editMode ? (
          <div className={styles.cardTitle}> {titleProp} </div>
        ) : (
          <input
            type="text"
            className={styles.cardTitle}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        )}

        <div
          onClick={() => toggleEditMode(titleProp, messageProp)}
          className={styles.cardTitleAttributes}
        >
          E
        </div>
        <div className={styles.cardTitleAttributes}>
          <DeletePost id={id} />
        </div>
      </div>
      {!editMode ? (
        <div className={styles.cardMessage}> {messageProp} </div>
      ) : (
        <>
          <textarea
            className={`${styles.cardMessage} ${styles.cardEditDescription}`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <UpdatePost
            onClickCallback={() => setEditMode(false)}
            id={id}
            title={title}
            message={message}
          />
        </>
      )}
    </div>
  );
};
