  import React from 'react'
  import "../styles/CardHomeProfile.css";
  import photoProfile from "../images/photoProfile.png"



  function CardHomeProfile( {onNavigate, activeIndex} ) {
    return (
      <div className='AllCardHomeProfile'>
    
        <div className='CardFtProfileHome'>
          <img onClick={() => onNavigate(1)}  src={photoProfile} alt="Ft Profile" width={150} height={150} className='FtProfileHome' />
        </div>

        <div className='CardHomeInfoP'>
          <h1 className='TitleNameHome'>Juan Diego Corella Camacho</h1>
          <p className='InfoStudyHome'>Front-End & Back-End <br /> Web Developer</p>
          <p className='InfoIdeaHome'>Innovation, Connection & Creativity</p>
        </div>

      </div>
    )
  }

  export default CardHomeProfile