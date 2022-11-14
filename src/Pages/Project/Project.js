import React, {useState, useRef} from "react";
import "../Project/Project.css";
import { ProjectList } from "../../Data/ProjectList/ProjectList.js";
import ProjectCard from '../../Components/ProjectCard/ProjectCard';

const Project = () => {

  const [project, setProject] = useState(ProjectList);
  
  const filterType = (status) => {
    setProject(
      ProjectList.filter((item) => {
        return item.status === status;
      })
    ); 
  };

  
  return (
    <div className="section-project-cards" id="portfolio">
      <div className="project-heading">
        <h1> My Projects</h1>
      </div>
      <div className="project-filter-buttons">
        <button  onClick={() => setProject(ProjectList)}>All</button>
        <button onClick={() => filterType('completed')}>Completed</button>
        <button  onClick={() => filterType('on-going')}>On-going</button>
      </div>

      <div className="projectList">
        {project.map((item, index) => {
          return (
            <ProjectCard
              key={index}
              name={item.name}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;