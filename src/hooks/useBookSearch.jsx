import { useState, useEffect } from "react";
import axios from "axios";

export default function useBookSearch(query, orderBy, pageNumber) {
  const noOfCardsPerPage = 40;
  const [error, setError] = useState("");
  const [books, setBooks] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    if (query === undefined) {
      setError(""); //Display no error on first page load
    } else if (query === "") {
      setError("Please enter a search term");
    } else {
      axios({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes`,
        params: {
          maxResults: noOfCardsPerPage,
          q: query,
          orderBy,
          startIndex: (pageNumber - 1) * noOfCardsPerPage,
        },
      })
        .then((res) => {
          setBooks((prevBooks) => {
            if (pageNumber === 1) {
              return res.data.items;
            } else {
              return [...prevBooks, ...res.data.items];
            }
          });
          if (res.data.totalItems > pageNumber * noOfCardsPerPage) {
            setIsLastPage(false);
          } else {
            setIsLastPage(true);
          }
          if (res.data.totalItems === 0 && pageNumber === 1) {
            setError("No Items found!");
          } else {
            setError("");
          }
        })
        .catch((err) => {
          setError(err.message);
        });
    }
  }, [query, orderBy, pageNumber]);

  return { error, books, isLastPage };
}
