import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Main from '../Main';
import styles from './App.module.scss';

function App(props) {
  const { avatar } = props.userData;
  return (
    <React.Fragment>
      <Header userData={props.userData}></Header>
      <Main avatar={avatar}></Main>
      <Footer></Footer>
    </React.Fragment>
  );
}

export default App;
