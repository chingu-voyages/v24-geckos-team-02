import React, { useState, useEffect } from "react";
import axios from "axios";
import CardList from "./CardList";
import googleBookToAppBook from "../utils/googleBookToAppBook";

export default function Favorites({ accessToken }) {
  const [books, setBooks] = useState([]);
  const removeFavorite = (id) => {
    setBooks((books) => books.filter((book) => book.id !== id));
  };
  useEffect(() => {
    if (accessToken.value) {
      axios({
        method: "GET",
        url: "https://books.googleapis.com/books/v1/mylibrary/bookshelves/0/volumes",
        headers: {
          Authorization: `Bearer ${accessToken.value}`,
        },
        params: {
          key: process.env.REACT_APP_GOOGLE_BOOKS_API_KEY,
        },
      }).then((res) => {
        console.log(res);
        setBooks(res.data.items ? res.data.items : []);
      });
    }
  }, [accessToken]);

  return (
    <div>
      <h1>Favorites</h1>
      {accessToken.value && books.length === 0 ? (
        <div className="scroll-end-message">Your favorite list is empty</div>
      ) : accessToken.value ? (
        <CardList
          books={books.map(googleBookToAppBook)}
          isLastPage={false}
          query={``}
          removeFavorite={removeFavorite}
          accessToken={accessToken}
        />
      ) : (
        <div className="scroll-end-message">Please login to see your favorites</div>
      )}
    </div>
  );
}
