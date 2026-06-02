import React from 'react'
import girl_image from '../assets/girl_image.jpg'
// image ko import karwa sakte haii

import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='user-container'>
        <p id='user-name'>{props.name}</p>
        <img id='user-img' src={girl_image} alt="image">
        </img>
        {/* image ko use karwa sakte haii */}
        <p id='user-desc'>description of vaishvi agrawal</p>
      
    </div>
  )
}

export default UserCard
  