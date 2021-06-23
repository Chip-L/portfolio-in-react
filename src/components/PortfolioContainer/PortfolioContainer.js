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
  // TODO: Add a comment describing the functionality of this method
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
      {/* // TODO: Add a comment describing what we are passing as props */}
      {/* This passes in the current page to the nav tab and the function to handlePageChange change via props */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {/* calls the render page function to determine which page should be displayed. */}
      {/* {renderPage()} */}
    </div>
  );
}
