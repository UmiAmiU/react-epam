import React from 'react';
import styles from './Header.module.scss';

function Header(props) {
  const { user, avatar } = props.userData;
  return (
    <header className={styles.header}>
      {user.firstName} {user.lastName}
    </header>
  );
}

export default Header;
