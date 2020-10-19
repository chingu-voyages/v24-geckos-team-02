import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./components/Search";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import useBookSearch from "./hooks/useBookSearch";

export default function App() {
  const [query, setQuery] = useState(undefined);
  const [pageNumber, setPageNumber] = useState(1);
  const { books, error, isLastPage } = useBookSearch(query, pageNumber);
  const handleSubmit = (e, searchTerm) => {
    e.preventDefault();
    setQuery(searchTerm);
    setPageNumber(1);
  };

  //'books' has search results
  console.log(books, pageNumber, isLastPage);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Search handleSubmit={handleSubmit} error={error} />
      <CardList />
      <button
        onClick={() => {
          /*
          More data is requested only if the current page isn't the last page.
          */
          if (!isLastPage) {
            setPageNumber((prevPageNo) => prevPageNo + 1);
          }
        }}
      >
        More
      </button>
      <Footer />
    </div>
  );
}
