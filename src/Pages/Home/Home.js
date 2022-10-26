import React from "react";
import "../Home/Home.css";
import MainContent from '../../Components/MainContent/MainContent';
import SocialIcons from "../../Components/SocialIcons/SocialIcons";

const Home = () => {
  return (
    <div className="section-home-container" id="home">
      <div className="content-wrapper">
      
        <MainContent /> 
         <div className="social-container">
          <SocialIcons />       
          
          </div>  
           
       </div>
    </div>
  );
};

export default Home;