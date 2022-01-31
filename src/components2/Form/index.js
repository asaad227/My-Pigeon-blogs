import React, {useState} from 'react';
import styles from "../../../styles/form.module.css"

export default function Form({onSubmitClick}) {
    const [name, setName] = useState("");
    const [text, setComment] =useState("");

    function handleClick(e){
        e.preventDefault();
        onSubmitClick({name:name, text:text});
        setName("");
        setComment("")
    }


  return <div>
      <form className={styles.form} onSubmit={handleClick}>
      <div className={styles.inputContainer}>
          <input className={styles.input} onChange={e=>setName(e.target.value)} type="text" placeholder='Enter your name...' value={name}/>
          <textarea className={styles.input} onChange={e=> setComment(e.target.value)} type="text" placeholder='Enter your comment...' value={text}/>
          </div>
          <div>
          <button className={styles.button}>Submit</button>
          </div>
      </form>
  </div>;
}
