import React, { useState, useEffect } from "react";
import "./App.scss";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./components/Search";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import useBookSearch from "./hooks/useBookSearch";

export default function App() {
  const [query, setQuery] = useState(undefined);
  const [orderBy, setOrderBy] = useState("relevance");
  const [pageNumber, setPageNumber] = useState(1);
  const [areResultsLoading, setAreResultsLoading] = useState(false);
  const { books, error, isLastPage, queryHistory } = useBookSearch(
    query,
    orderBy,
    pageNumber,
    setAreResultsLoading
  ); // 'books' has search results

  const handleSubmit = (e, searchTerm, orderBy) => {
    e.preventDefault();
    setQuery(searchTerm);
    setOrderBy(orderBy);
    setPageNumber(1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    // if at the bottom of the page && the current page isn't the last page && results aren't loading
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      !isLastPage &&
      !areResultsLoading
    ) {
      setPageNumber((prevPageNo) => prevPageNo + 1);
    }
  }

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Search
        handleSubmit={handleSubmit}
        error={error}
        queryHistory={queryHistory}
      />
      <CardList books={books.map(googleBookToAppBook)} />
      <div>{areResultsLoading ? "Loading" : ""}</div>
      <Footer />
    </div>
  );
}

function googleBookToAppBook({ volumeInfo }) {
  const { title, subtitle, authors, publisher, imageLinks } = volumeInfo;
  return {
    title: title === undefined ? "" : title,
    subtitle: subtitle === undefined ? "" : subtitle,
    authors: authors === undefined ? [] : authors,
    publisher: publisher === undefined ? "" : publisher,
    thumbnailImageLink:
      imageLinks === undefined ? "" : imageLinks.smallThumbnail,
  };
}
