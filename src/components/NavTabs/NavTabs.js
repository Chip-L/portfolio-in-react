import React from "react";
import "./NavTabs.css";

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <nav>
      <a
        href="#home"
        onClick={() => handlePageChange("Home")}
        className={currentPage === "Home" ? "nav-link active" : "nav-link"}
      >
        Home
      </a>

      <div className="bar"></div>
      <a
        href="#about"
        onClick={() => handlePageChange("About")}
        //  TODO: Add a comment explaining what this logic is doing

        className={currentPage === "About" ? "nav-link active" : "nav-link"}
      >
        About
      </a>

      <div className="bar"></div>
      <a
        href="#blog"
        onClick={() => handlePageChange("Blog")}
        //  TODO: Add a comment explaining what this logic is doing

        className={currentPage === "Blog" ? "nav-link active" : "nav-link"}
      >
        Blog
      </a>

      <div className="bar"></div>
      <a
        href="#contact"
        //  TODO: Add a comment explaining what this logic is doing

        onClick={() => handlePageChange("Contact")}
        className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
      >
        Contact
      </a>
    </nav>
  );
}

export default NavTabs;
