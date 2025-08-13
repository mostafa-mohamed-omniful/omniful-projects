import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import more from '../../assets/more.png';
import arrow from '../../assets/arrow.png';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='navbar'>
        <Link className='title' to="/">Portfolio</Link>
        <div className='menu'>
            <img className='moreBtn' src={isOpen ? arrow : more} alt="menu" onClick={() => setIsOpen(!isOpen)} />
        <ul className={`items${isOpen ? 'open' : ''}`}>
            <li>
                <Link to="/experience">Experience</Link>
            </li>
            <li>
                <Link to="/projects">Projects</Link>
            </li>
        </ul>
        </div>
    </nav>
  )
}