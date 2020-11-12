//import { findByLabelText } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";

import Authentication from "./Authentication";
import logo from "../assets/img/logo.svg";

import "../css/Navbar.css";

export default function Navbar(props) {
  const styles = {
    height: 95,
    padding: 15,
  };

  function displayOptions () {
    document.getElementById("menu").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");

  }

  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <img src={logo} style={styles} alt="logo" />
      </div>
      {/* <div className="nav-list"> */}
      <ul className="nav-list">
        <Link to="/">
          <li className="nav-link">Search</li>
        </Link>
        <Link to="/favorites">
          <li className="nav-link">Favorites</li>
        </Link>
        <li className="nav-link">
          <a
            target="_blank"
            href="https://github.com/chingu-voyages/v24-geckos-team-02/graphs/contributors"
          >
            About
          </a>
        </li>
        <li>
          <Authentication {...props} />
        </li>
      </ul>
      {/* </div> */}

        <div id="menu-bar">
          <div id="menu" onClick={displayOptions}>
            <div id="bar1" className="bar"></div>
            <div id="bar2" className="bar"></div>
            <div id="bar3" className="bar"></div>
          </div>
          <ul className="nav" id="nav">
            <Link to="/">
            <li className="nav-link">Search</li>
            </Link>
            <li><a target='_blank' href="https://github.com/chingu-voyages/v24-geckos-team-02/graphs/contributors">About</a></li>
            <li><Authentication {...props} /></li>
          </ul>
        </div>
        <div className="menu-bg" id="menu-bg"></div>

    </nav>
  );
}
