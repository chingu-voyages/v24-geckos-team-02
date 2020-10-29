import React, { Fragment } from "react";
import Card from "./Card";

export default function CardList(props) {
  const volumes = props.books;
  const card = (volume, index) => <Card {...volume} key={index} />;
  return (
    <Fragment>
      <div className="card-list">{volumes.map(card)}</div>
      {props.isLastPage && props.books.length > 3 && (
        <div className="scroll-end-message">
          <em>No more results!</em>
        </div>
      )}
    </Fragment>
  );
}
