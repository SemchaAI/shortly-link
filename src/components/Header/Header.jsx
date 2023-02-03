import styles from "./header.module.css";
import cn from "classnames";

import { ReactComponent as Logo } from "../../images/logo.svg";
import { useState } from "react";
import { Links } from "../Links/Links";

export const Header = () => {
  const [isMenu, setMenuIs] = useState(false);
  const clickHandler = () => {
    setMenuIs(!isMenu);
  };
  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerLeft}>
          <picture id="shortly">
            <Logo alt="shortly" className={styles.logo} />
          </picture>
          <nav className={styles.headerLinks}>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Resources</a>
          </nav>
        </div>
        <div className={styles.headerRight}>
          <Links url="#" color="black" type="round" text="Login" />
          <Links url="#" color="cyan" type="round" text="Sign Up" />
          <div className={`${styles.burgerContainer}`}>
            <button className={styles.burgerButton} onClick={clickHandler}>
              Open
            </button>
            <span>
              <span className={styles.burgerBars}></span>
              <span className={styles.burgerBars}></span>
              <span className={styles.burgerBars}></span>
            </span>
          </div>
        </div>
      </header>
      <nav
        className={cn(styles.bsideMenu, {
          hidden: isMenu === false,
        })}
      >
        <a href="#">Features</a>
        <a href="#">Pricing</a>
        <a href="#">Resources</a>
        <a href="#" className={styles.login}>
          Login
        </a>

        <Links url="#" color="cyan" type="round" text="Sign Up" />
      </nav>
    </>
  );
};
