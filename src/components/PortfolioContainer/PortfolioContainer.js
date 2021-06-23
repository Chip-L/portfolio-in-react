import React, { useState } from "react";
import NavTabs from "../NavTabs/NavTabs";
/*
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
*/
export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");
  /*
  // This is a function that will return the page to be rendered
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Blog") {
      return <Blog />;
    }
    return <Contact />;
  };
*/
  // when this is executed it will update the page state to show which page will display when the Render page function is called
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* This passes in the current page to the nav tab and the function to handlePageChange change via props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* calls the render page function to determine which page should be displayed. */}
      {/* {renderPage()} */}
    </div>
  );
}
