import React, { useRef } from 'react';
import styles from './CardCreationForm.module.scss';

function CardCreationForm(props) {
  const { handler } = props;
  const header = useRef(null);
  const text = useRef(null);

  const clearValue = () => {
    header.current.value = '';
    text.current.value = '';
  };

  return (
    <div className={styles['main-block']}>
      <div className={styles['info']}>Header input: </div>
      <div className={styles['input-block']}>
        <input
          type="text"
          name="header"
          onChange={handler}
          className={styles['header-input']}
          placeholder="Header"
          ref={header}
        />
      </div>
      <div className={styles['info']}>Text input: </div>
      <div className={styles['input-block']}>
        <textarea
          name="text"
          onChange={handler}
          className={styles['text-input']}
          placeholder="Main text"
          ref={text}
        ></textarea>
      </div>
      <input
        type="submit"
        value="Submit"
        onClick={(event) => {
          handler(event);
          clearValue();
        }}
        className={styles.submit}
      />
    </div>
  );
}

export default CardCreationForm;
