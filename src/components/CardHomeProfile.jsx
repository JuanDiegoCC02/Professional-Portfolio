import React from 'react'
import "../styles/CardHomeProfile.css";
import ft_Profile from "../images/Ft Profile.webp"
import photoProfile from "../images/photoProfile.png"

import { Link } from 'react-router-dom';

function CardHomeProfile() {
  return (
    <div className='AllCardHomeProfile'>
  
      <div className='CardFtProfileHome'>
        <Link to="/profile">
        <img src={photoProfile} alt="Ft Profile" width={150} height={150} className='FtProfileHome' />
        </Link>
      </div>

      <div className='CardHomeInfoP'>
        <h1 className='TitleNameHome'>Juan Diego Corella Camacho</h1>
        <p className='InfoStudyHome'>Front-End & Back-End Developer</p>
        <p className='InfoIdeaHome'>Innovation, Connection & Creativity</p>
      </div>

    </div>
  )
}

export default CardHomeProfile