import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">BOOKS PLUS</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Team</a></li>
        <li><a href="#">Contacts</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </nav>
  )
}
