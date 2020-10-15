import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Search from "./components/Search";
import CardList from "./components/CardList";
import Footer from "./components/Footer";
import axios from "axios";

export default function App() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState("");
  const handleSubmit = (e, searchTerm) => {
    e.preventDefault();
    if (searchTerm === "") {
      setError("Please enter a search term");
    } else {
      axios({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes`,
        params: {
          maxResults: 40,
          q: searchTerm,
        },
      })
        .then((res) => {
          setBooks(res.data.items);
          if (res.data.totalItems === 0) {
            setError("No Items found!");
          } else {
            setError("");
          }
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  };

  //'books' has the search results
  console.log(books);

  return (
    <div className="App">
      <Navbar />
      <Header />
      <Search handleSubmit={handleSubmit} error={error} />
      <CardList />
      <Footer />
    </div>
  );
}
