import { findByLabelText } from "@testing-library/react";
import React from "react";
import "../css/Navbar.css";

export default function Navbar() {
  const styles = {
    height: 100,
    padding: 10,
  };

  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <img
          src={require("../assets/img/logo.svg")}
          style={styles}
          alt="logo"
        />
      </div>
      <div className="nav-list">
        <ul className="nav-list-items">
          {/* <li><a href="#">Home</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Contacts</a></li>*/}
          <li className="nav-link">
            <a href="#">Link</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
