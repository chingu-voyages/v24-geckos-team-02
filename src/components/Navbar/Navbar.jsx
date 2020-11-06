//import { findByLabelText } from "@testing-library/react";
import React from "react";

import Authentication from "../Authentication/Authentication";
import logo from "../../assets/img/logo.svg";

import styles from "./Navbar.module.scss";

export default function Navbar(props) {
  const img_styles = {
    height: 95,
    padding: 15,
  };

  return (
    <nav className={styles.navBar}>
      <div className={styles.navLogo}>
      <img src={logo} style={img_styles} alt="logo" />
      </div>
      {/* <div className="nav-list"> */}
        <ul className={styles.navList}>
            <li className={styles.navLink}><a target='_blank' href="https://github.com/chingu-voyages/v24-geckos-team-02/graphs/contributors">About</a></li>
            <li>
          <Authentication {...props} />
        </li>
        </ul>
      {/* </div> */}

    </nav>
  );
}
