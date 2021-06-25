import React from "react";

import "./ProjectDisplay.css";

function ProjectDisplay({ demoItem }) {
  const imageURL = `/assets/images/${demoItem.imageLocation}`;

  return (
    <div className="imgContainer">
      {/* <a href={demoItem.siteLink} target="_blank" rel="noopener noreferrer"> */}
      <img src={process.env.PUBLIC_URL + imageURL} alt={demoItem.altText} />
      <div className="img-text">
        <p>
          <span className="project-name">{demoItem.appName}</span>
          <br />
          <span className="technologies">
            {demoItem.technologiesUsed.join(", ")}
          </span>
        </p>
        <p>
          <a href={demoItem.siteLink} target="_blank" rel="noopener noreferrer">
            See it Live!
          </a>
          <br />
          <a
            href={demoItem.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            See the Github repo!
          </a>
        </p>
      </div>
      {/* </a> */}
    </div>
  );
}

export default ProjectDisplay;
