import React from "react";

import styles from "./statistics.module.css";

export const Statistics = () => {
  return (
    <section className={styles.sectionThree}>
      <div className={styles.advStats}>
        <h2>Advanced Statistics</h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className={styles.advCards}>
        <div className={styles.flexColumn}>
          <div className={styles.brand}>
            <h3>brand recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instill confidence in your
              content.
            </p>
          </div>
        </div>
        <div className={styles.flexColumn}>
          <div className={styles.records}>
            <h3>detailed records</h3>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instill confidence in your
              content.
            </p>
          </div>
        </div>
        <div className={styles.flexColumn}>
          <div className={styles.customizable}>
            <h3>fully customizable</h3>
            <p>
              Boost your brand recognition with each click. Generic links don't
              mean a thing. Branded links help instill confidence in your
              content.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
