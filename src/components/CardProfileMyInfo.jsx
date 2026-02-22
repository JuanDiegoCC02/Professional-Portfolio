import React from 'react'
import "../styles/CardProfileMyInfo.css";

function CardProfileMyInfo() {
  return (
<div className='AllCardProfileMyInfo'>

        <div className='ContainerTitleCardPrfoile'>
            <h1 className='TitleNameCardProfile'>Juan Diego Corella Camacho</h1>
            <h2 className='subTitleWorkCardProfile'>Front-End & Back-End Developer</h2>
        </div>

        <div className='ContainerMyInfoCardProfile'>
            <h3 className='AboutMeTitleCardProfile'>About me</h3>
            <p className='DescriptionCardProfile'> 
                I'm a Front-End and Back-End developer with a strong foundation in React and Django. 
                I also have experience in other areas such as GitHub, MySQL, and WordPress.
            </p>
            
             <p className='DescriptionCardProfile'>
                I consider myself a passionate person, eager to learn constantly, seeking more experience, and I enjoy being supportive and helpful. 
                I'm also detail-oriented, focused on quality, and reliable, capable of working effectively both under pressure and as part of a team.
             </p>
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
                <li className='LiCardProfile'>Native Fetch API</li>
                <li className='LiCardProfile'>Bootstrap</li>
                <li className='LiCardProfile'>Tailwin</li>
                <li className='LiCardProfile'>ApexCharts</li>
                <li className='LiCardProfile'>Leaflet</li>
            </ul>
        </div>

        <div className='subContainerStudyCardProfile'>
            <h5 className='TitleStudyCardProfile'>Back-End and DataBases</h5>
            <ul className='UlCardProfile'>
                <li className='LiCardProfile'>DJango</li>
                <li className='LiCardProfile'>DJango REST Framework</li>
                <li className='LiCardProfile'>JWT-Json Web Tokens</li>
                <li className='LiCardProfile'>MySQL</li>
                <li className='LiCardProfile'>Node.js</li>
                <li className='LiCardProfile'>Cookies</li>
                <li className='LiCardProfile'>AWS-Amazon Web Services</li>
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