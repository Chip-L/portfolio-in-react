import React from "react";

import "./projectDisplay.css";

function projectDisplay({ demoItem }) {
  return (
    <div>
      <a href={demoItem.siteLink} target="_blank" rel="noopener noreferrer">
        <img
          src={process.env.PUBLIC_URL + "/assets/images/" + demoItem.imageName}
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

export default projectDisplay;
