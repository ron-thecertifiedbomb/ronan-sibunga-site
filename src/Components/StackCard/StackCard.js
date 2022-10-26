import React from 'react'
import '../StackCard/StackCard.css'

const StackCard = ({name, image, skillOne,skillTwo,skillThree }) => {

  return (
    <><div className="card" key={name}>
    <div className="logo-container">
      <img className="logo" src={image} alt="Logo" />
    </div>
    <h3 className="heading-card">{name}</h3>
    <ul>
      <li>{skillOne}</li>
      <li>{skillTwo}</li>
      <li>{skillThree}</li>
    </ul>
  </div></>
  )
}

export default StackCard