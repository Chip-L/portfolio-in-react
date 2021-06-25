import React from "react";
import "./Header.css";

import headshot from "../../assets/images/headshot_small.JPG";

function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <section className="logo">
        <img id="headshot" src={headshot} alt="head shot" />
        <h1>Lawrence A Long III (Chip)</h1>
      </section>
      <nav>
        <a
          href="#Portfolio"
          onClick={() => handlePageChange("My Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        >
          Portfolio
        </a>
        <div className="bar"></div>
        <a
          href="#about"
          onClick={() => handlePageChange("About Me")}
          className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
        <div className="bar"></div>
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact Me")}
          className={
            currentPage === "ContactMe" ? "nav-link active" : "nav-link"
          }
        >
          Contact
        </a>
        <div className="bar"></div>
        <a
          href={
            process.env.PUBLIC_URL +
            "/assets/Resume - Lawrence Long III (2015).pdf"
          }
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}

export default Header;
