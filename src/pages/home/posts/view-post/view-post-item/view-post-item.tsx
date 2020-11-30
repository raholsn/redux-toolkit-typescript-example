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

  const [title, setTitle] = useState<string>(titleProp);
  const [message, setMessage] = useState<string>(messageProp);

  const toggleEditMode = (title: string, message: string) => {
    if (editMode === false) {
      setTitle(title);
      setMessage(message);
    }
    setEditMode(!editMode);
  };

  return (
    <div key={id} className={styles.card}>
      {editMode === false ? (
        <>
          <div className={styles.cardTitleContainer}>
            <div className={styles.cardTitle}> {titleProp} </div>
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
          <div className={styles.cardMessage}> {messageProp} </div>
        </>
      ) : (
        <div>
          <>
            <div className={styles.cardTitleContainer}>
              <input
                type="text"
                className={styles.cardTitle}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <div
                onClick={() => toggleEditMode(title, message)}
                className={styles.cardTitleAttributes}
              >
                E
              </div>
              <div className={styles.cardTitleAttributes}>
                <DeletePost id={id} />
              </div>
            </div>
            <textarea
              style={{ width: 225 }}
              className={styles.cardMessage}
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
        </div>
      )}
    </div>
  );
};
