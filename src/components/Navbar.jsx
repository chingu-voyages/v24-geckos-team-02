import React from "react";
import logo from '../assets/img/logo.svg'
import '../css/Navbar.css'

export default function Navbar() {
  const styles = {
    height: 70,
    padding: 10
  }

  return (
    <nav>
      <img src={logo} style={styles} alt="logo" />
      <ul className="nav-links">
        <li><a target='_blank' href="https://github.com/chingu-voyages/v24-geckos-team-02/graphs/contributors">About</a></li>
      </ul>
    </nav>
  )
}
