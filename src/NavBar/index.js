import Link from "next/link";
import React from "react";
import styles from "../../styles/navbar.module.css";

export default function NavBar() {
  return (
    <nav className={styles.mainNav}>
      <Link href="/">
        <a className={styles.home}>Home</a>
      </Link>
      <Link href="/facts">
        <a className={styles.facts}>Pigeon Facts</a>
      </Link>
      <Link href="/history">
        <a className={styles.history}>Pigeon History</a>
      </Link>
    </nav>
  );
}
