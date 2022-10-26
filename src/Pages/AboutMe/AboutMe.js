import React from "react";
import '../AboutMe/AboutMe.css';
// import Modal from "../../../Components/Modal/Modal";


const AboutMe = ({modal, onClick}) => {
  return (
    <>
    <div className="section-home" id="aboutme">

    <div className="aboutme-container">
      <h1 className="about-heading">About Me</h1>
      <div className="about-para">
        <p>
          I'm a multimedia artist passionate about creating awesome digital
          content, from graphic designing, filmmaking, video editing,
          animation, and web development.
        </p>
        <br></br>
        <p>My passion and interest in programming and design help me find creative solutions to technical challenges. </p>
        <br></br>
        <p>
        My past time when I'm not doing digital technical stuff is playing the guitar, making music, and traveling.
        </p>
        <br></br>
   <button className='resume-btn' onClick={onClick}>Download Now</button> 
      </div>
    </div>

    
      {/* {modal ? <Modal  onClick={onClick}/> : ""} */}
  </div>

  

  
  </>
  );
};

export default AboutMe;