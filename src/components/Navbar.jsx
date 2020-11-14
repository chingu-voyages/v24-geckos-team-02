//import { findByLabelText } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";

import Authentication from "./Authentication";
import logo from "../assets/img/logo.svg";

import "../css/Navbar.css";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar(props) {
  const styles = {
    height: 95,
    padding: 15,
  };


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

       <HamburgerMenu />
  

    </nav>
  );
}
