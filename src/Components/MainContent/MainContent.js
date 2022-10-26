import React from 'react'
import BracketPhoto from "../MainContent/Bracket.png";
import './MainContent.css'

const MainContent = () => {


  return (
    <div className="content-main">

    <p className="greeting-text">Hi my name is</p>
    <h1 className="name-text">Ronan Ramos Sibunga</h1>

    <div className="content-logo">
      <img className="bracket-logo" src={BracketPhoto} alt="Logo" />
      <h2 className="name-position">
         <span className="changing-text"></span>
      </h2>
      <img className="bracket-logo" src={BracketPhoto} alt="Logo" />
    </div>

    
  </div>
  )
}

export default MainContent