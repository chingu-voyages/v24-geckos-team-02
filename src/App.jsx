import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import "./App.scss";

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/favorites">
        <Favorites />
      </Route>
    </Switch>
  );
}
