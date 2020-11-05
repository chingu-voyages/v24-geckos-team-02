import React, { useState, useEffect } from "react";
import "./App.scss";

import Navbar from "./components/Navbar";
// Header from "./components/Header";
import Search from "./components/Search";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import useBookSearch from "./hooks/useBookSearch";
import googleBookToAppBook from "./utils/googleBookToAppBook"

export default function App() {
  const [query, setQuery] = useState(undefined);
  const [orderBy, setOrderBy] = useState("relevance");
  const [pageNumber, setPageNumber] = useState(1);
  const [accessToken, setAccessToken] = useState({ value: "", expiresAt: "" });
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
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  function handleScroll() {
    // if at the bottom of the page && the current page isn't the last page && results aren't loading
    if (
      window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight &&
      !isLastPage &&
      !areResultsLoading
    ) {
      setPageNumber((prevPageNo) => prevPageNo + 1);
    }
  }
  return (
    <div className="App">
      <Navbar setAccessToken={setAccessToken} accessTokenExpiresAt={accessToken.expiresAt} />
      {/* <Header /> */}
      <Search handleSubmit={handleSubmit} error={error} queryHistory={queryHistory} />
      {/* <CardList books={books.map(googleBookToAppBook)} isLastPage={isLastPage}/> */}
      <CardList books={books.map(googleBookToAppBook)} isLastPage={isLastPage} query={query}/>
      {/* <div>{areResultsLoading ? "Loading" : ""}</div> */}
      {areResultsLoading === true && <div>Loading...</div>}
      <Footer />
    </div>
  );
}



