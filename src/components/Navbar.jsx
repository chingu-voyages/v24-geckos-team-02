import React from "react";
import '../css/Navbar.css'

export default function Navbar() {
  const styles = {
    height: 80,
    padding: 10
  }

  return (
    <nav>
      <img src={require("../img/books-plus-v1.svg")} style={styles} alt="logo" />
      <ul className="nav-links">
        {/* <li><a href="#">Home</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Contacts</a></li>
        <li><a href="#">Logout</a></li> */}
      </ul>
    </nav>
  )
}
