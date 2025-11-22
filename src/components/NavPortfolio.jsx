import React from 'react'
import "../styles/NavPortfolio.css";
import { NavLink } from 'react-router-dom';

function NavPortfolio() {
  return (
    <nav className='TotalNavPortfolio'>
        <ul className='UlNavPortfolio'>
            <li className='LiNavPortfolio'> <NavLink to="/">Home</NavLink> </li>
            <li className='LiNavPortfolio'> <NavLink to="/profile">Profile</NavLink> </li>
            <li className='LiNavPortfolio'> <NavLink to="/projects">Projects</NavLink> </li>
        </ul>
    </nav>
  )
}
export default NavPortfolio