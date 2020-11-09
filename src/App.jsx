import React, { useState } from "react";
import { SnackbarProvider } from "notistack";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import "./App.scss";

export default function App() {
  const [accessToken, setAccessToken] = useState({ value: "", expiresAt: "" });
  if (accessToken) {
    console.log("accessToken", accessToken.value);
  }
  return (
    <SnackbarProvider maxSnack={2}>
      <div className="App">
        <Navbar setAccessToken={setAccessToken} accessTokenExpiresAt={accessToken.expiresAt} />
        <Switch>
          <Route exact path="/">
            <Home accessToken={accessToken} buttonType="favorite" />
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
