import { useState, useEffect } from "react";
import axios from "axios";

export default function useBookSearch(query, pageNumber) {
  const noOfCardsPerPage = 40;
  const [error, setError] = useState("");
  const [books, setBooks] = useState([]);
  const [isLastPage, setIsLastPage] = useState(false);
  const [queryHistory, setQueryHistory] = useState([]);

  useEffect(() => {
    if (query === undefined) {
      setError(""); //Display no error on first page load
    } else if (query.trim().length === 0) {
      setError("Please enter a search term");
    } else {
      axios({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes`,
        params: {
          maxResults: noOfCardsPerPage,
          q: query,
          startIndex: (pageNumber - 1) * noOfCardsPerPage,
        },
      })
        .then((res) => {
          setBooks((prevBooks) => {
            if (pageNumber === 1) {
              setQueryHistory((q) => {
                //Prevent duplicate queries being added to query history
                return [...new Set([query, ...q])];
              });
              return res.data.totalItems === 0 ? [] : res.data.items;
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
  }, [query, pageNumber]);

  return { error, books, isLastPage, queryHistory };
}
