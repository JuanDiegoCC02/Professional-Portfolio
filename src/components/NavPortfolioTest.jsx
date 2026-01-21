import React from 'react'
import "../styles/NavPortfolioTest.css";

function NavPortfolioTest({ onNavigate, activeIndex }) {
  return (
    <nav className='TotalNavPortfolio'>
        <ul className='UlNavPortfolio'>
            <li className='LiNavPortfolio'> 
              <button 
                onClick={() => onNavigate(0)} 
                className={activeIndex === 0 ? "active" : ""}
              >Home</button> 
            </li>
            <li className='LiNavPortfolio'> 
              <button 
                onClick={() => onNavigate(1)} 
                className={activeIndex === 1 ? "active" : ""}
              >Profile</button> 
            </li>
            <li className='LiNavPortfolio'> 
              <button 
                onClick={() => onNavigate(2)} 
                className={activeIndex === 2 ? "active" : ""}
              >Projects</button> 
            </li>
        </ul>
    </nav>
  )
}
export default NavPortfolioTest