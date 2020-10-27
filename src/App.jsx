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
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const { books, error, isLastPage, queryHistory } = useBookSearch(
    query,
    pageNumber,
    setIsLoading
  ); // 'books' has search results

  const handleSubmit = (e, searchTerm) => {
    e.preventDefault();
    setQuery(searchTerm);
    setPageNumber(1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    // if at the bottom of the page and the current page isn't the last page
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      !isLastPage
    ) {
      setPageNumber((prevPageNo) => prevPageNo + 1);
      setIsLoading(true);
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
      <div>{isLoading ? "Loading" : ""}</div>
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
