import React from "react";
import styles from "./Main.module.scss";

function Main(props) {
  const avatar = props.avatar;
  return (
    <main className={styles.main}>
      <img src={avatar.image} alt={avatar.alt} />
    </main>
  );
}

export default Main;
