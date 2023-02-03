import React from "react";
import styles from "./container.module.css";

export const Container = ({ children, theme }) => (
  <div className={`${styles.container} ${styles[theme]}`}>{children}</div>
);
