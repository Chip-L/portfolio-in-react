import React, { useState } from "react";
import Header from "../Header/Header";
import ContentContainer from "../ContentContainer/ContentContainer";
import Footer from "../Footer/Footer";

import "./PortfolioContainer.css";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Portfolio");

  // when this is executed it will update the page state to show which page will display when the Render page function is called
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="mainContent">
        <ContentContainer currentPage={currentPage} />
      </div>
      <Footer />
    </>
  );
}
