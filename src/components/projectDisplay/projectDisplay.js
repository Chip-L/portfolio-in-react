import React from "react";

import "./ProjectDisplay.css";

// import context for images
const requestImageFile = require.context("../../assets/images", true);

function ProjectDisplay({ demoItem }) {
  // console.log(`../../assets/images/${demoItem.imageLocation}`);
  console.log(demoItem);
  console.log(
    "requestImageFile",
    requestImageFile(`./${demoItem.imageLocation}`)
  );
  console.log(requestImageFile.keys());
  return (
    <div className="imgContainer">
      <a href={demoItem.siteLink} target="_blank" rel="noopener noreferrer">
        <img
          src={requestImageFile(`./${demoItem.imageLocation}`)}
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
