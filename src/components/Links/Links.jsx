import React from "react";
import styles from "./Links.module.css";

export const Links = ({ url, color, type, text }) => {
  return (
    <a href={url} className={`${styles[color]} ${styles[type]}`}>
      {text}
    </a>
  );
};
