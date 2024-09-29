import { useState } from "react";
import ContentContainer from "../ContentContainer/ContentContainer";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./WebsiteLayout.css";

export default function WebsiteLayout() {
  const [currentPage, setCurrentPage] = useState("Portfolio");

  // when this is executed it will update the page state to show which page will display when the Render page function is called
  const handlePageChange = (page: string) => setCurrentPage(page);

  return (
    <>
      {/* <Header
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      /> */}
      {/* <div className="mainContent">
        <ContentContainer currentPage={currentPage} />
      </div> */}
      {/* <Footer /> */}
    </>
  );
}
