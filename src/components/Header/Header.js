import React from "react";
import "./Header.css";

function Header({ currentPage, handlePageChange }) {
  return (
    <header>
      <section class="logo">
        <img
          id="headshot"
          src={process.env.PUBLIC_URL + "/assets/images/headshot_small.jpg"}
          alt="head shot"
        />
        <h1>Lawrence A Long III (Chip)</h1>
      </section>
      <nav>
        <a
          href="#Portfolio"
          onClick={() => handlePageChange("Portfolio")}
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
          className={
            currentPage === "About Me" ? "nav-link active" : "nav-link"
          }
        >
          About Me
        </a>

        <div className="bar"></div>
        <a
          href="#contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
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
