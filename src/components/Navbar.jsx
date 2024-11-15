import React, { useState } from 'react';
import '../styles/Navbar.css';
import logo from '../assets/coconat-logo.png';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <img src={logo} alt="Coconat Store" className="logo" />
      <nav>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
        </ul>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
