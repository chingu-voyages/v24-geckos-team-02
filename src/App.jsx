import React, { useState } from "react";
import useBookSearch from "./hooks/useBookSearch";
import { SnackbarProvider } from "notistack";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import "./App.scss";

export default function App() {
  const [accessToken, setAccessToken] = useState({ value: "", expiresAt: "" });
  const [query, setQuery] = useState(undefined);
  const [orderBy, setOrderBy] = useState("relevance");
  const [pageNumber, setPageNumber] = useState(1);
  const [areResultsLoading, setAreResultsLoading] = useState(false);

  const { books, error, isLastPage, queryHistory } = useBookSearch(query, orderBy, pageNumber, setAreResultsLoading); // 'books' has search results

  const handleSubmit = (e, searchTerm, orderBy) => {
    e.preventDefault();
    setQuery(searchTerm);
    setOrderBy(orderBy);
    setPageNumber(1);
    // setModal(false)
  };
  return (
    <SnackbarProvider maxSnack={2}>
      <div className="App">
        <Navbar setAccessToken={setAccessToken} accessTokenExpiresAt={accessToken.expiresAt} />
        <Switch>
          <Route exact path="/">
            <Home
              {...{ accessToken, query, books, error, isLastPage, queryHistory, areResultsLoading, handleSubmit, setPageNumber }}
              buttonType="favorite"
            />
          </Route>
          <Route path="/favorites">
            <Favorites accessToken={accessToken} buttonType="unfavorite" />
          </Route>
        </Switch>
        <Footer />
      </div>
    </SnackbarProvider>
  );
}
