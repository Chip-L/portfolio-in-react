import React from "react";
import AboutMe from "../pages/AboutMe/AboutMe";
import ContactMe from "../pages/ContactMe/ContactMe";
import "./ContentContainer.css";

function ContentContainer({ currentPage }) {
  const renderContent = () => {
    console.log(currentPage);
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "ContactMe") {
      return <ContactMe />;
    }
  };

  return (
    <div className="container">
      <h1>{currentPage}</h1>
      {renderContent()}
      {/* <AboutMe /> */}
    </div>
  );
}

export default ContentContainer;
