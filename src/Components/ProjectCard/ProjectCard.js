import React from "react";
import "../ProjectCard/ProjectCard.css";

const ProjectCard = ({ image, name, id }) => {
 
  return (
    <div
      className="projectItem" >
      <div className="projectItem-content-holder">
      <img className="bgImage" src={image} alt=""></img>
      <h2 className="project-title"> {name} </h2>
         </div>
     
    </div>
  );
};

export default ProjectCard;