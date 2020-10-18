import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./components/Search";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import useBookSearch from "./hooks/useBookSearch";

export default function App() {
  const [query, setQuery] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const { books, error } = useBookSearch(query, pageNumber);
  const handleSubmit = (e, searchTerm) => {
    e.preventDefault();
    setQuery(searchTerm);
  };

  //'books' has search results
  console.log(books);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Search handleSubmit={handleSubmit} error={error} />
      <CardList />
      <button onClick={() => setPageNumber((prevPageNo) => prevPageNo + 1)}>More</button>
      <Footer />
    </div>
  );
}
