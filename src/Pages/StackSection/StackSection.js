import React from "react";
import '../StackSection/StackSection.css';
import { stackList } from "../../Data/StackList";
 import StackCard from "../../Components/StackCard/StackCard";

const StackSection = () => {
  return (
    <div className="section-project" id="tools">
      <div className="stack-heading">
        <h1>My Skills</h1>
      </div>

      <div className="web-development-wrapper">
        <div className="tools-heading">
          <h1>Web Development</h1>
        </div>

        <div className="card-container">
          {stackList
            .filter((item) => item.category === "Web Development")
            .map((item) => (
              <StackCard
                key={item.name}
                name={item.name}
                image={item.image}
                skillOne={item.skillOne}
                skillTwo={item.skillTwo}
                skillThree={item.skillThree}
              />
            ))}
        </div>
      </div>

      <div className="design-wrapper">
        <div className="tools-heading">
          <h1>Design</h1>
        </div>

        <div className="card-container">
          {stackList
            .filter((item) => item.category === "Design")
            .map((item) => (
              <StackCard
                key={item.name}
                name={item.name}
                image={item.image}
                skillOne={item.skillOne}
                skillTwo={item.skillTwo}
                skillThree={item.skillThree}
              />
            ))}
        </div>
      </div>
      <div className="video-editing-wrapper">
        <div className="tools-heading">
          <h1>Video Editing</h1>
        </div>

        <div className="card-container">
          {stackList
            .filter((item) => item.category === "Video Production")
            .map((item) => (
              <StackCard
                key={item.name}
                name={item.name}
                image={item.image}
                skillOne={item.skillOne}
                skillTwo={item.skillTwo}
                skillThree={item.skillThree}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default StackSection;