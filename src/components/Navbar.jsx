//import { findByLabelText } from "@testing-library/react";
import React from "react";
import logo from '../assets/img/logo.svg'
import "../css/Navbar.css";

export default function Navbar() {
  const styles = {
    height: 100,
    padding: 10,
  };

  return (
    <nav className="nav-bar">
      <div className="nav-logo">
      <img src={logo} style={styles} alt="logo" />
      </div>
      <div className="nav-list">
        <ul className="nav-list-items">
            <li className="nav-link"><a target='_blank' href="https://github.com/chingu-voyages/v24-geckos-team-02/graphs/contributors">About</a></li>
        </ul>
      </div>
    </nav>
  );
}
