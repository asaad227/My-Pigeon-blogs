import React from 'react';
import styles from "../../../styles/listitem.module.css"

export default function ListItem({name, comment}) {

  return(<div key='1' className={styles.container}>
  <div className={styles.header}>
  <div className={styles.avatar}>
          {name
            .split(" ")
            .map((w) => w[0])
            .join("")}
        </div>
      <h3 className={styles.name}>{name}</h3>
      </div>
    <p className={styles.content}>{comment}</p>
  </div>)

}
