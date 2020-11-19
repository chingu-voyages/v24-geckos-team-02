import React, { useState, useEffect } from "react";
import useBookSearch from "./hooks/useBookSearch";
import { SnackbarProvider } from "notistack";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Search from "./components/Search";
import CardList from "./components/CardList";
import googleBookToAppBook from "./utils/googleBookToAppBook";
import { Route, Switch } from "react-router-dom";
import Favorites from "./components/Favorites";
import "./App.scss";

export default function App() {
  const [accessToken, setAccessToken] = useState({ value: "", expiresAt: "" });
  const [query, setQuery] = useState(undefined);
  const [orderBy, setOrderBy] = useState("relevance");
  const [pageNumber, setPageNumber] = useState(1);
  const [areResultsLoading, setAreResultsLoading] = useState(false);

  const { books, error, isLastPage, queryHistory } = useBookSearch(
    query,
    orderBy,
    pageNumber,
    setAreResultsLoading
  );

  const handleSubmit = (e, searchTerm, orderBy) => {
    e.preventDefault();
    setQuery(searchTerm);
    setOrderBy(orderBy);
    setPageNumber(1);
  };

  useEffect(() => {
    const cardListElement = document.getElementById("cardList");
    if (typeof cardListElement != "undefined" && cardListElement != null) {
      cardListElement.addEventListener("scroll", handleScroll);
      return () => cardListElement.removeEventListener("scroll", handleScroll);
    }
  });

  function handleScroll() {
    const cardListElement = document.getElementById("cardList");
    if (
      typeof cardListElement != "undefined" &&
      cardListElement != null &&
      // if at the bottom of the page && the current page isn't the last page && results aren't loading
      cardListElement.clientHeight + cardListElement.scrollTop === 
        cardListElement.scrollHeight &&
      !isLastPage &&
      !areResultsLoading
    ) {
      setPageNumber((prevPageNo) => prevPageNo + 1);
    }
  }

  return (
    <SnackbarProvider maxSnack={2}>
      <div className="App">
        <Navbar
          setAccessToken={setAccessToken}
          accessTokenExpiresAt={accessToken.expiresAt}
        />
        <Switch>
          <Route exact path="/">
            <Search
              handleSubmit={handleSubmit}
              error={error}
              queryHistory={queryHistory}
              query={query}
            />
            <CardList
              books={books.map(googleBookToAppBook)}
              isLastPage={isLastPage}
              query={query}
              accessToken={accessToken}
              buttonType="favorite"
            />
            {areResultsLoading === true && (
              <div className="loading-msg">Loading...</div>
            )}
            <Footer />
          </Route>
          <Route path="/favorites">
            <Favorites accessToken={accessToken} buttonType="unfavorite" />
            <Footer />
          </Route>
        </Switch>
      </div>
    </SnackbarProvider>
  );
}
