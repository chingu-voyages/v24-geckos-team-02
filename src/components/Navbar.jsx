//import { findByLabelText } from "@testing-library/react";
import React from "react";

import Authentication from "./Authentication";
import logo from "../assets/img/logo.svg";

import "../css/Navbar.css";

export default function Navbar(props) {
  const styles = {
    height: 95,
    padding: 15,

  };

  function displayOptions () {
    //console.log("working"); 
    document.getElementById("menu").classList.toggle("change");
  }

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

        <div id="menu-bar">
          <div id="menu" onClick={displayOptions}>
            <div id="bar1" class="bar"></div>
            <div id="bar2" class="bar"></div>
            <div id="bar3" class="bar"></div>
          </div>
          <ul class="nav" id="nav">
            <li><a target='_blank' href="https://github.com/chingu-voyages/v24-geckos-team-02/graphs/contributors">About</a></li>
            <li><Authentication {...props} /></li>
          </ul>
        </div>
        <div class="menu-bg" id="menu-bg"></div>

    </nav>
  );
}
