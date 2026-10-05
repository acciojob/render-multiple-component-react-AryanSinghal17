import React from "react";
import "./../styles/App.css";

const App = () => {
  const projects = [
    {
      name: "Dream Portfolio Website",
      description: "A website to showcase my projects and skills."
    },
    {
      name: "Movie App",
      description: "A React application to search and explore movies."
    },
    {
      name: "E-commerce Store",
      description: "An online shopping platform built with React."
    }
  ];

  return (
    <div className="ns-wrapper">
      {projects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">
            {project.description}
          </h6>
        </div>
      ))}
    </div>
  );
};

export default App;