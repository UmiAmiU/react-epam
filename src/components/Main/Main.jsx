import React from 'react';
import CardsContainer from '../CardsContainer';
import styles from './Main.module.scss';

function Main(props) {
  const avatar = props.avatar;
  return (
    <main className={styles.main}>
      <CardsContainer />
    </main>
  );
}

export default Main;
