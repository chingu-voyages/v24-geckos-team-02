import React from 'react'
import { Link } from "react-router-dom";

import Authentication from "./Authentication";

const HamburgerMenu = (props) => {
    let displayOptions = () => {
        document.getElementById("menu").classList.toggle("change");
        document.getElementById("nav").classList.toggle("change-menu-only");
    
      }

    return (
        <>
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
          <Link to="/favorites">
          <li className="nav-link">Favorites</li>
         </Link>
          <li><a target='_blank' rel="noopener noreferrer" href="https://github.com/chingu-voyages/v24-geckos-team-02/graphs/contributors">About</a></li>
          <li><Authentication {...props} /></li>
        </ul>
      </div>
      <div className="menu-bg" id="menu-bg"></div>
     </>
    );
}

export default HamburgerMenu; 