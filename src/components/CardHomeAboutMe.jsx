import React from 'react'
import "../styles/CardHomeAboutMe.css"

function CardHomeAboutMe() {
  return (
    <div>

        <div className='containerAllInfoProfile'>
            <div className='containerTitleAboutMe'>
             <h3 className='titleAboutMe'>About Me</h3>
            </div>
            

            <div className='containerMyInfo'>
                <p className='myInfo'>
                    I'm a Front-End and Back-End developer with a strong foundation in React and Django. 
                    I also have experience in other areas such as GitHub, MySQL, and WordPress.
                </p>
            </div>

            <div className='containerMyInfo'>
                <p className='myInfo'>
                    I consider myself a passionate person, eager to learn constantly, seeking more experience, and I enjoy being supportive and helpful. 
                    I'm also detail-oriented, focused on quality, and reliable, capable of working effectively both under pressure and as part of a team.
                </p>
            </div>
        </div>

    </div>
  )
}

export default CardHomeAboutMe