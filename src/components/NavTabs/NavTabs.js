import React from "react";
import "./NavTabs.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav>
      <a
        href="#Portfolio"
        onClick={() => handlePageChange("Portfolio")}
        className={currentPage === "Portfolio" ? "nav-link active" : "nav-link"}
      >
        Portfolio
      </a>

      <div className="bar"></div>
      <a
        href="#about"
        onClick={() => handlePageChange("About Me")}
        className={currentPage === "About Me" ? "nav-link active" : "nav-link"}
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
        href={process.env.PUBLIC_URL + "/Resume - Lawrence Long III (2015).pdf"}
        target="_blank"
      >
        Resume
      </a>
    </nav>
  );
}

export default NavTabs;
