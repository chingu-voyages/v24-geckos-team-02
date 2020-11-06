//import { findByLabelText } from "@testing-library/react";
import React from "react";

import Authentication from "../Authentication/Authentication";
import logo from "../../assets/img/logo.svg";

import "./Navbar.scss";

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
            <li className="nav-link"><a target='_blank' href="https://github.com/chingu-voyages/v24-geckos-team-02/graphs/contributors">About</a></li>
            <li>
          <Authentication {...props} />
        </li>
        </ul>
      {/* </div> */}

    </nav>
  );
}
