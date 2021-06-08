import React from 'react';
import styles from './Card.module.scss';

function Card(props) {
  const { id, header, text, remove } = props;

  return (
    <div className={styles['main-block']}>
      <div className={styles['header-block']}>
        <h2 className={styles['header-text']}>{header}</h2>
        <span className={styles['close-btn']} onClick={() => remove(id)}>
          &times;
        </span>
      </div>
      <div className={styles['main-text']}>{text}</div>
    </div>
  );
}

export default Card;
