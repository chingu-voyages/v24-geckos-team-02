import React from 'react'
import { Link } from "react-router-dom";

import Authentication from "./Authentication";

const HamburgerMenu = (props) => {
    
    //helper function to handle routine operations associated with opening & closing menu 
    const closeOrOpenMenu = (menu, menuOptions) => {
      menu.classList.toggle("change");
      menuOptions.classList.toggle("change-menu-options-only");
    };

    const handleMenuClick = () => {
      const menu = document.getElementById("menu");
      const menuOptions = document.getElementById("nav");

      const handleOffClick = () => {
        closeOrOpenMenu(menu, menuOptions); //close menu options on an off click aka toggle everything
        document.removeEventListener("click", handleOffClick); //safely remove Event Listener on an 'off click'
      };

      closeOrOpenMenu(menu, menuOptions);  //open menu options on click by default 

      //if menu options are opened, add an Event Listener to document & handle potential off click
      menuOptions.className === "nav change-menu-options-only"
        ? document.addEventListener("click", handleOffClick)
        : closeOrOpenMenu(menu, menuOptions);
    };

    return (
        <>
        <div id="menu-bar">
        <div id="menu" onClick={handleMenuClick}>
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