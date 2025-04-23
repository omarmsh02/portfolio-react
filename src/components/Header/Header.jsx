import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assests/images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className="container">
      <img src={logo} alt="LogoPic.png" width="15%" height="100%" />
      <nav>
        <ul className="nav_bar">
          <li className="nav_items"><Link to="/">Home</Link></li>
          <li className="nav_items"><Link to="/aboutme">About Me</Link></li>
          <li className="nav_items"><Link to="/projects">Projects</Link></li>
          <li className="nav_items"><Link to="/skills">Skills</Link></li>
          <li className="nav_items"><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;