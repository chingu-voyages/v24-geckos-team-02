import React from "react";
import '../css/Footer.css'

export default function Footer() {
  return (
    <footer className="footer bg-dark">
      <div class="social">
        <a target='_blank' href="https://twitter.com/ChinguCollabs?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i class="fab fa-twitter fa-2x"></i></a>
        <a target='_blank' href="https://www.youtube.com/channel/UCS7zmJXbe7FgTC3sHlUf4jw"><i class="fab fa-youtube fa-2x"></i></a>
      </div>
      <p>Copyright &copy; 2020 - BooksPlus</p>
    </footer>
  );
}
