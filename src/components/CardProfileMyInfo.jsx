import React from 'react'
import "../styles/CardProfileMyInfo.css";

function CardProfileMyInfo() {
  return (
<div className='AllCardProfileMyInfo'>

        <div className='ContainerTitleCardPrfoile'>
            <h1 className='TitleNameCardProfile'>Juan Diego Corella Camacho</h1>
            <h2 className='subTitleWorkCardProfile'>Developer Full Stack</h2>
        </div>

        <div className='ContainerMyInfoCardProfile'>
            <h3 className='AboutMeTitleCardProfile'>About me</h3>
            <p className='DescriptionCardProfile'> I am a Full Stack programmer with a solid background in both front-end and back-end.</p>
            
             <p className='DescriptionCardProfile'>I consider myself a passionate person, eager to learn new technologies and apply them to create functional, intuitive, and efficient solutions. I also consider myself detail-oriented, focused on quality, and stable, capable of working effectively both under pressure and as part of a team.</p>
        </div>

    <div className='AllContainerStudiesCardProfile'>
        <div className='subContainerStudyCardProfile'>
            <h5 className='TitleStudyCardProfile'>Web Development Languages</h5>
            <ul className='UlCardProfile'>
                <li className='LiCardProfile'>HTML</li>
                <li className='LiCardProfile'>CSS</li>
                <li className='LiCardProfile'>JavaScript</li>
                <li className='LiCardProfile'>Python</li>
                <li className='LiCardProfile'>C++</li>
            </ul>
        </div>
        
       
        <div className='subContainerStudyCardProfile'>
            <h5 className='TitleStudyCardProfile'>Frameworks and Libraries</h5>
            <ul className='UlCardProfile'>
                <li className='LiCardProfile'>React</li>
                <li className='LiCardProfile'>React Router</li>
                <li className='LiCardProfile'>Next.js</li>
                <li className='LiCardProfile'>Bootstrap</li>
                <li className='LiCardProfile'>Tailwin</li>
                <li className='LiCardProfile'>ApexCharts</li>
            </ul>
        </div>

        <div className='subContainerStudyCardProfile'>
            <h5 className='TitleStudyCardProfile'>Back-End and DataBases</h5>
            <ul className='UlCardProfile'>
                <li className='LiCardProfile'>DJango</li>
                <li className='LiCardProfile'>Json Web Token</li>
                <li className='LiCardProfile'>MySQL</li>
                <li className='LiCardProfile'>Node.js</li>
                <li className='LiCardProfile'>Cookies</li>
                <li className='LiCardProfile'>Amazon Web Services</li>
                <li className='LiCardProfile'>Cloudinary</li>
                <li className='LiCardProfile'>Integration of AI services to Model Context Protocol</li>
            </ul>
        </div>

        
        <div className='subContainerStudyCardProfile'>
            <h5 className='TitleStudyCardProfile'>Tools</h5>
            <ul className='UlCardProfile'>
                <li className='LiCardProfile'>VS Code</li>
                <li className='LiCardProfile'>GitHub</li>
                <li className='LiCardProfile'>Figma</li>
                <li className='LiCardProfile'>Trello</li>
                <li className='LiCardProfile'>Slack</li>
                <li className='LiCardProfile'>Discord</li>
                <li className='LiCardProfile'>Canva</li>
                <li className='LiCardProfile'>Postman</li>
            </ul>
        </div>
    </div>

</div>
  )
}

export default CardProfileMyInfo