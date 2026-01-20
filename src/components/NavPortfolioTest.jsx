import React from 'react'
import "../styles/NavPortfolioTest.css";
import { NavLink } from 'react-router-dom';

function NavPortfolioTest() {
  return (
    <nav className='TotalNavPortfolio'>
        <ul className='UlNavPortfolio'>
            {/* NavLink detecta automáticamente la ruta y pone la clase 'active' */}
            <li className='LiNavPortfolio'> 
              <NavLink to="/homeTest" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink> 
            </li>
            <li className='LiNavPortfolio'> 
              <NavLink to="/profile" className={({ isActive }) => isActive ? "active" : ""}>Profile</NavLink> 
            </li>
            <li className='LiNavPortfolio'> 
              <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink> 
            </li>
        </ul>
    </nav>
  )
}
export default NavPortfolioTest