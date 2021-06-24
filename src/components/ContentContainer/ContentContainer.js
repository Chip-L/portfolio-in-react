import React from "react";
import AboutMe from "../pages/AboutMe/AboutMe";
import "./ContentContainer.css";

function ContentContainer({ currentPage }) {
  const renderContent = () => {
    console.log(currentPage);
    if (currentPage === "AboutMe") {
      console.log("about me if statement");
      return <AboutMe />;
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
