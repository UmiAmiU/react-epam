import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-text']}>
        © Copyright 2021 Hell Company, All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
