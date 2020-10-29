import React from "react";
import '../css/Navbar.css'

export default function Navbar() {
  const styles = {
    height: 100,
    padding: 10
  }

  return (
    <nav>
      <img src={require("../assets/img/logo.svg")} style={styles} alt="logo" />
      <ul className="nav-links">
        <li><a href="#">About</a></li>
      </ul>
    </nav>
  )
}
