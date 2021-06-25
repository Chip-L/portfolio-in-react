import React from "react";

import "./ProjectDisplay.css";

function ProjectDisplay({ demoItem }) {
  return (
    <div className="imgContainer">
      <a href={demoItem.siteLink} target="_blank" rel="noopener noreferrer">
        <img
          src={"../../assets/images/" + demoItem.imageName}
          alt={demoItem.altText}
        />
        <div className="img-text">
          <span className="project-name">{demoItem.appName}</span>
          <br />
          <span className="technologies">
            {demoItem.technologiesUsed.join(", ")}
          </span>
        </div>
      </a>
    </div>
  );
}

export default ProjectDisplay;
