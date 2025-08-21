import { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import { AnimatedHamburgerButton } from '../AnimatedHamburgerButton/AnimatedHamburgerButton';

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className='navbar'>
        <Link className='title' to="/">Portfolio</Link>
        <div className='menu'>
            {isOpen && <ul className='items'>
                <li>
                    <Link to="/experience">Experience</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>}
            <AnimatedHamburgerButton onClick={() => setIsOpen(!isOpen)}/>
        </div>
    </nav>
  )
}