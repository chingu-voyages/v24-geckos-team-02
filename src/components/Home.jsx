import React, { useState, useEffect, Fragment } from "react";
import Search from "./Search";
import CardList from "./CardList";
import googleBookToAppBook from "../utils/googleBookToAppBook";

export default function Home({
  query,
  accessToken,
  books,
  error,
  isLastPage,
  queryHistory,
  areResultsLoading,
  handleSubmit,
  setPageNumber,
}) {
  useEffect(() => {
    const cardListElement = document.getElementById("cardList");
    cardListElement.addEventListener("scroll", handleScroll);
    return () => cardListElement.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    const cardListElement = document.getElementById("cardList");
    // if at the bottom of the page && the current page isn't the last page && results aren't loading
    if (cardListElement.clientHeight + cardListElement.scrollTop === cardListElement.scrollHeight && !isLastPage && !areResultsLoading) {
      setPageNumber((prevPageNo) => prevPageNo + 1);
    }
  }
  return (
    <Fragment>
      <Search handleSubmit={handleSubmit} error={error} queryHistory={queryHistory} />
      <CardList
        books={books.map(googleBookToAppBook)}
        isLastPage={isLastPage}
        query={query}
        accessToken={accessToken}
        buttonType="favorite"
      />
      {areResultsLoading === true && <div className="loading-msg">Loading...</div>}
    </Fragment>
  );
}
