import React from "react";

import { demoList } from "../../assets/projectList.json";
import ProjectDisplay from "../../components/ProjectDisplay/ProjectDisplay";

import "./Portfolio.css";

function Portfolio() {
  console.log(demoList);
  return (
    <section className="myWork">
      {demoList.map((demoItem) => (
        <ProjectDisplay demoItem={demoItem} />
      ))}
    </section>
  );
}

export default Portfolio;
