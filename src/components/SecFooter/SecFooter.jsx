import React from "react";
import { Footer } from "../Footer/Footer";
import { Links } from "../Links/Links";
import styles from "./secFooter.module.css";

export const SecFooter = () => {
  return (
    <section className={styles.fakeFooter}>
      <h3>Boost your links today</h3>
      <div className={styles.links}>
        <Links url="#" color="cyan" type="round" text="Get Started" />
      </div>
      <Footer />
    </section>
  );
};
