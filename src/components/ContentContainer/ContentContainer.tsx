import AboutMe from "@pages/AboutMe";
import ContactMe from "@pages/ContactMe";
import Portfolio from "@pages/Portfolio";
import "./ContentContainer.css";

interface ContentContainerProps {
  currentPage: string;
}

function ContentContainer({ currentPage }: ContentContainerProps) {
  const renderContent = () => {
    if (currentPage === "About Me") {
      return <AboutMe />;
    }
    if (currentPage === "Contact Me") {
      return <ContactMe />;
    }
    return <Portfolio />;
  };

  return (
    <div className="container">
      <h1>{currentPage}</h1>
      {renderContent()}
    </div>
  );
}

export default ContentContainer;
