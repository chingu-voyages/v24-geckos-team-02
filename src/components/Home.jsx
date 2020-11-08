import React, { useState, useEffect, Fragment } from "react";
import Navbar from "./Navbar";
// Header from "./components/Header";
import Search from "./Search";
import CardList from "./CardList";
import useBookSearch from "../hooks/useBookSearch";
import googleBookToAppBook from "../utils/googleBookToAppBook";

export default function Home() {
  const [query, setQuery] = useState(undefined);
  const [orderBy, setOrderBy] = useState("relevance");
  const [pageNumber, setPageNumber] = useState(1);
  const [areResultsLoading, setAreResultsLoading] = useState(false);

  const { books, error, isLastPage, queryHistory } = useBookSearch(query, orderBy, pageNumber, setAreResultsLoading); // 'books' has search results

  const handleSubmit = (e, searchTerm, orderBy) => {
    e.preventDefault();
    setQuery(searchTerm);
    setOrderBy(orderBy);
    setPageNumber(1);
    // setModal(false)
  };

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
      {/* <CardList books={books.map(googleBookToAppBook)} isLastPage={isLastPage}/> */}
      <CardList books={books.map(googleBookToAppBook)} isLastPage={isLastPage} query={query} />
      {/* <div>{areResultsLoading ? "Loading" : ""}</div> */}
      {areResultsLoading === true && <div className="loading-msg">Loading...</div>}
    </Fragment>
  );
}
