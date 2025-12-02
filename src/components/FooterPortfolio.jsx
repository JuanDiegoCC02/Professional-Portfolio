import React from 'react'
import Cv from "../icons/Cv.png"
import gmail from "../icons/gmail.png"
import github from "../icons/github.png"
import linkedin from "../icons/linkedin.png"
import "../styles/FooterPortfolio.css";


function FooterPortfolio() {
    const generateEmail= ()=> {
        const email = "dcorella2324@gmail.com"
        const subject = "Portfolio consultaion"
        const message = "Hi, I'd like to know more about your work." 
        const gmailUrl  = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&message=${encodeURIComponent(message)}`;
        window.open(gmailUrl, "_blank");
    }
    
  return (
  <footer className='TotalFooterPortfolio'>
        <ul className='UlFooterPortfolio'> 
            <li className='LiFooterPortfolio'><a href="https://www.linkedin.com/in/juan-diego-corella-camacho-a543ba1a9/" target='blank'rel="noopener noreferrer">
                <img src={linkedin} width={40} height={40} alt="LinkedinIcon" />
            </a></li>

              <li className='LiFooterPortfolio'><a href="https://github.com/JuanDiegoCC02" target='blank'rel="noopener noreferrer">
                <img src={github} width={40} height={40} alt="GithubIcon" />
            </a></li>

              <li className='LiFooterPortfolio' onClick={generateEmail}>
                <img src={gmail} width={40} height={40} alt="GmailIcon" />
            </li>

              <li className='LiFooterPortfolio'><a href="/CV JDiego.pdf" target='blank'rel="noopener noreferrer">
                <img src={Cv} width={40} height={40} alt="CvIcon" />
            </a></li>
        </ul>
  </footer>
  )
}

export default FooterPortfolio