import React from 'react'
import Cv from "../icons/Cv.png"
import gmail from "../icons/gmail.png"
import github from "../icons/github.png"
import linkeIn from "../icons/linkeIn.png"
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
                <img src={linkeIn} width={45} height={45} alt="LinkeInIcon" />
            </a></li>

              <li className='LiFooterPortfolio'><a href="https://github.com/JuanDiegoCC02" target='blank'rel="noopener noreferrer">
                <img src={github} width={45} height={45} alt="GithubIcon" />
            </a></li>

              <li className='LiFooterPortfolio' onClick={generateEmail}>
                <img src={gmail} width={45} height={45} alt="GmailIcon" />
            </li>

              <li className='LiFooterPortfolio'><a href="/CV JDiego.pdf" target='blank'rel="noopener noreferrer">
                <img src={Cv} width={45} height={45} alt="CvIcon" />
            </a></li>
        </ul>
  </footer>
  )
}

export default FooterPortfolio