import React, { useRef, useState } from 'react';
import styles from './CardCreationForm.module.scss';

function CardCreationForm(props) {
  const { handler } = props;
  const header = useRef(null);
  const text = useRef(null);
  const [error, setError] = useState({});

  const clearValue = () => {
    header.current.value = '';
    text.current.value = '';
  };

  const checkValue = (event) => {
    let errorObj = {};
    if (header.current.value === '') {
      errorObj['header'] = true;
      header.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
    } else {
      errorObj['header'] = false;
    }
    if (text.current.value === '') {
      errorObj['text'] = true;
      text.current.scrollIntoView({ block: 'center', behavior: 'smooth' });
    } else {
      errorObj['text'] = false;
    }
    if (!errorObj.header && !errorObj.text) {
      handler(event);
      clearValue();
    }
    setError({ ...errorObj });
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
      {error.header && (
        <div className={styles['error']}>this field is required</div>
      )}
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
      {error.text && (
        <div className={styles['error']}>this field is required</div>
      )}
      <input
        type="submit"
        value="Submit"
        onClick={(event) => checkValue(event)}
        className={styles.submit}
      />
    </div>
  );
}

export default CardCreationForm;
