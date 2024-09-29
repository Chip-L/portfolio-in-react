import React from "react";
import { demoList } from "../../assets/projectList.json";
import ProjectDisplay from "../../components/ProjectDisplay/ProjectDisplay";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="myWork">
      {demoList.map((demoItem, index) => (
        <ProjectDisplay
          demoItem={demoItem}
          key={index}
        />
      ))}
    </section>
  );
}

export default Portfolio;
