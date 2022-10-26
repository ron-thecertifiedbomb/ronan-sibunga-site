import React from "react";
import "../Project/Project.css";
import { ProjectList } from "../../Data/ProjectList/ProjectList.js";
import ProjectCard from '../../Components/ProjectCard/ProjectCard';

const Project = () => {
  return (
    <div className="section-project-cards" id="portfolio">
      <div className="project-heading">
        <h1> My Projects</h1>
      </div>

      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectCard
              key={project.image}
              id={idx}
              name={project.name}
              image={project.image}
              skills={project.skills}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;