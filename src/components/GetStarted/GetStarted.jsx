import React from "react";
import { Links } from "../Links/Links";

import styles from "./getStarted.module.css";

export const GetStarted = () => {
  return (
    <section className={styles.firstSection}>
      <div className={styles.imgWrapper}>
        {/* <Working className={styles.img} /> */}
        <img
          className={styles.img}
          src="../../images/illustration-working.svg"
          alt="working"
        />
      </div>
      <div className={styles.wrapper}>
        <h1 className={styles.slogan}>More than just shorter links</h1>
        <p className={styles.text}>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <Links
          className={styles.links}
          url="#"
          color="cyan"
          type="round"
          text="Get Started"
        />
      </div>
    </section>
  );
};
