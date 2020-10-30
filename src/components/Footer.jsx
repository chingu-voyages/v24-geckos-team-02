import React from "react";
import '../css/Footer.css'

export default function Footer() {
  return (
    <footer className="footer bg-dark">
      <div class="social">
        <a href="#"><i class="fab fa-twitter fa-2x"></i></a>
        <a href="#"><i class="fab fa-youtube fa-2x"></i></a>
      </div>
      <p>Copyright &copy; 2020 - BooksPlus</p>
    </footer>
  );
}
