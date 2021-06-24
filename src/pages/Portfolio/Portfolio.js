import React from "react";

import demoList from process.env.PUBLIC_URL + "/assets/projectList.json"

import "./Portfolio.css";

function Portfolio() {
  console.log(demoList);
  return (
    <section className="myWork">
     {}
    </section>
  );
}

export default Portfolio;
