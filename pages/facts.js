import React, { useState } from "react";
import articles from "../src/libs/articles";
import Button from "../src/components2/Button";
import Form from "../src/components2/Form";
import ListItem from "../src/components2/ListItem";
import styles from "../styles/facts.module.css";
import NavBar from "../src/NavBar";

export default function FirstBlog() {
  const [post, setPost] = useState(articles);
  const [count, setCount] = useState(0);
  const [minus, setMinus] = useState(0);
  const [item, setItem] = useState([]);
  function addToPost({ name, text }) {
    const newCom = {
      name: name,
      text: text,
    };

    setItem([...item, newCom]);
  }

  function handleClick() {
    setCount(count + 1);
  }

  function handleMinus() {
    setMinus(minus + 1);
  }

  return (
    <article>
      <NavBar />
      <div>
        {post.map((e) => {
          if (e.id === 0) {
            return (
              <div className={styles.mainDiv} key={e.id}>
                <h2 className={styles.header}>{e.title}</h2>
              </div>
            );
          } else {
            return <div key={e.id}></div>;
          }
        })}
      </div>
      <div>
        {post.map((e) => {
          if (e.id === 0) {
            return (
              <div className={styles.paraDiv} key={e.id}>
                {e.paragraphs.map((e) => (
                  <div key={e.id}>
                    <p className={styles.paragraphs}>{e.text}</p>
                  </div>
                ))}
              </div>
            );
          } else {
            return <div key={e.id}></div>;
          }
        })}
      </div>
      <div>
        {post.map((e) => {
          if (e.id === 0) {
            return (
              <div className={styles.post} key={e.id}>
                {e.comments.map((e) => (
                  <ListItem key={e.id} name={e.name} comment={e.text} />
                ))}
              </div>
            );
          } else {
            return <div key={e.id}></div>;
          }
        })}
      </div>
      <div className={styles.post}>
        {item.map((e, key) => (
          <ListItem key={key} name={e.name} comment={e.text} />
        ))}
      </div>
      <div>
        <Button
          handleClick={handleClick}
          handleMinus={handleMinus}
          count={count}
          minus={minus}
        />
      </div>
      <div>
        <Form onSubmitClick={addToPost} />
      </div>
    </article>
  );
}
