import { useState, useEffect } from "react";
import axios from "axios";

export default function useBookSearch(query, pageNumber) {
  const [error, setError] = useState("");
  const [books, setBooks] = useState([]);
  useEffect(() => {
    if (query === "") {
      setError("Please enter a search term");
    } else {
      axios({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes`,
        params: {
          maxResults: 40,
          q: query,
          startIndex: (pageNumber - 1) * 40,
        },
      })
        .then((res) => {
          setBooks((prevBooks) => {
            return [...prevBooks, ...res.data.items];
          });
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
  }, [query, pageNumber]);

  return { error, books };
}
