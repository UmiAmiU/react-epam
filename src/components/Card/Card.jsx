import React from 'react';
import styles from './Card.module.scss';

function Card(props) {
  const { header, text } = props;
  console.log(styles);
  return (
    <div className={styles['main-block']}>
      <h3>{header}</h3>
      <div>{text}</div>
    </div>
  );
}

export default Card;
