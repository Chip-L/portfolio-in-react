import { demoItem } from "types";
import { getLocalAssetUrl } from "@utils/URLs";
import "./ProjectDisplay.css";

interface ProjectDisplayProps {
  demoItem: demoItem;
}

function ProjectDisplay({ demoItem }: ProjectDisplayProps) {
  const imageURL = getLocalAssetUrl(`images/${demoItem.imageLocation}`);

  return (
    <div className="imgContainer">
      <img
        src={imageURL}
        alt={demoItem.altText}
      />
      <div className="img-text">
        <p>
          <span className="project-name">{demoItem.appName}</span>
          <br />
          <span className="technologies">
            {demoItem.technologiesUsed.join(", ")}
          </span>
        </p>
        <p>
          <a
            href={demoItem.siteLink}
            target="_blank"
            rel="noopener noreferrer"
          >
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
    </div>
  );
}

export default ProjectDisplay;
