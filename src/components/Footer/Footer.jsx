import React from "react";
import styles from "./footer.module.css";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as Fb } from "../../images/icon-facebook.svg";
import { ReactComponent as Twitter } from "../../images/icon-twitter.svg";
import { ReactComponent as Printerest } from "../../images/icon-pinterest.svg";
import { ReactComponent as Inst } from "../../images/icon-instagram.svg";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <Logo alt="shortly" className={styles.logo} />
        <nav className={styles.nav}>
          <div className={styles.features}>
            <p>features</p>
            <a href="#">link shortening</a>
            <a href="#">branded links</a>
            <a href="#">analytics</a>
          </div>
          <div className={styles.resources}>
            <p>resources</p>
            <a href="#">blog</a>
            <a href="#">developers</a>
            <a href="#">support</a>
          </div>
          <div className={styles.company}>
            <p>company</p>
            <a href="#">about</a>
            <a href="#">our team</a>
            <a href="#">careers</a>
            <a href="#">contact</a>
          </div>
        </nav>
        <div className={styles.icons}>
          <Fb className={styles.fb} />
          <Twitter className={styles.twitter} />
          <Printerest className={styles.printerest} />
          <Inst className={styles.inst} />
        </div>
      </footer>
    </>
  );
};
