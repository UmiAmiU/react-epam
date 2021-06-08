import React from 'react';
import styles from './Header.module.scss';

function Header(props) {
  const { user, avatar } = props.userData;
  return (
    <header className={styles.header}>
      <div className={styles['header-text']}>
        Welcom to cite, {user.firstName} {user.lastName}
      </div>
    </header>
  );
}

export default Header;
