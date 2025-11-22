import React from 'react'
import "../styles/CardHomeProfile.css";
import ft_Profile from "../imagenes/Ft Profile.webp"
import { Link } from 'react-router-dom';

function CardHomeProfile() {
  return (
    <div>

      <div className='CardFtProfileHome'>
        <Link to="/profile">
        <img src={ft_Profile} alt="Ft Profile" width={150} height={150} className='FtProfileHome' />
        </Link>
      </div>

      <div className='CardHomeInfoP'>
        <h1 className='TitleNameHome'>Juan Diego Corella Camacho</h1>
        <p className='InfoStudyHome'>Developer Web Full Stack</p>
        <p className='InfoIdeaHome'>Innovation, Creativity and Connection</p>
      </div>

    </div>
  )
}

export default CardHomeProfile