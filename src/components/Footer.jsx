import React from "react";

export default function Footer() {

  return (
    <footer className="footer-section">
      <div className="footer-social">
        <a target='_blank' className="footer-link" href="https://twitter.com/ChinguCollabs?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><i class="fab fa-twitter fa-2x"></i></a>
        <a target='_blank' className="footer-link" href="https://www.youtube.com/channel/UCS7zmJXbe7FgTC3sHlUf4jw"><i class="fab fa-youtube fa-2x"></i></a>
        <a target='_blank' className="footer-link" href="https://github.com/chingu-voyages/v24-geckos-team-02"><i class="fab fa-github fa-2x"></i></a>
      </div>
      <p className="footer-note">Copyright &copy; 2020 - BooksPlus</p>
    </footer>
  );
}
