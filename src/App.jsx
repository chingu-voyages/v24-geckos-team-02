import React, { useState, useEffect } from "react";
import "./App.scss";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./components/Search";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import useBookSearch from "./hooks/useBookSearch";
import googleBookToAppBook from "./utils/googleBookToAppBook"

export default function App() {
  const [query, setQuery] = useState(undefined);
  const [orderBy, setOrderBy] = useState("relevance");
  const [pageNumber, setPageNumber] = useState(1);

  const { books, error, isLastPage, queryHistory } = useBookSearch(
    query,
    orderBy,
    pageNumber
  ); // 'books' has search results

  const handleSubmit = (e, searchTerm, orderBy) => {
    e.preventDefault();
    setQuery(searchTerm);
    setOrderBy(orderBy);
    setPageNumber(1);
    // setModal(false)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    // if at the bottom of the page and the current page isn't the last page
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && !isLastPage) {
      setPageNumber((prevPageNo) => prevPageNo + 1);
    }
  }

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Search handleSubmit={handleSubmit} error={error} queryHistory={queryHistory} />
      <CardList books={books.map(googleBookToAppBook)} isLastPage={isLastPage} query={query}/>
      <Footer />
    </div>
  );
}



