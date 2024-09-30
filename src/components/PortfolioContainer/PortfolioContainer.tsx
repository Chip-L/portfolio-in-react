import { useState } from "react";
import ContentContainer from "@components/ContentContainer";
import Footer from "@components/Footer";
import Header from "@components/Header";
import "./PortfolioContainer.css";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Portfolio");

  // when this is executed it will update the page state to show which page will display when the Render page function is called
  const handlePageChange = (page: string) => setCurrentPage(page);

  return (
    <>
      <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
      <div className="mainContent">
        <ContentContainer currentPage={currentPage} />
      </div>
      <Footer />
    </>
  );
}
