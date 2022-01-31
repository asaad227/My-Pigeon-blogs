import React from 'react';
import styles from "../../../styles/button.module.css"
import {AiFillLike, AiFillDislike}  from "react-icons/ai";


export default function Button({handleClick, handleMinus, count, minus}) {
  return <div className={styles.btn}>
    <button onClick={handleClick} className={styles.like}> <AiFillLike/> {count}
              </button>
              <button onClick={handleMinus} className={styles.dislike}><AiFillDislike/> {minus}
              </button>
  </div>;
}
