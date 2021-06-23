import React, { useState } from "react";
import Header from "../Header/Header";

// import Home from "./pages/Portfolio";
import AboutMe from "../pages/AboutMe/AboutMe";
// import Contact from "./pages/Contact";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This is a function that will return the page to be rendered
  const renderPage = () => {
    // if (currentPage === "Portfolio") {
    //   return <Portfolio />;
    // }
    if (currentPage === "About Me") {
      return <AboutMe />;
    }
    // return <Contact />;
  };

  // when this is executed it will update the page state to show which page will display when the Render page function is called
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* This passes in the current page to the nav tab and the function to handlePageChange change via props */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* calls the render page function to determine which page should be displayed. */}
      {renderPage()}
    </div>
  );
}
