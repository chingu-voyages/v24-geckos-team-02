import React, { Fragment } from "react";
import Card from "../Card/Card";

import styles from "./CardList.module.scss"

export default function CardList({books, query, isLastPage}) {
  const card = (book, index) => <Card book={book} key={index} query={query} />;
  return (
    <Fragment>
      <div className={styles.cardList}>{books.map(card)}</div>
      {isLastPage && books.length > 3 && (
        <div className={styles.scrollEndMessage}>
          <em>No more results!</em>
        </div>
      )}
    </Fragment>
  );
}
