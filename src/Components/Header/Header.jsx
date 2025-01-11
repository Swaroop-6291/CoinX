import React, { useState } from 'react';
import Logo from './Logo';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="header">
      <div>
        <Logo />
      </div>
      <div className="right">
        
        <div className={`menu ${isMenuOpen ? 'active' : ''}`}>
          <div>Crypto Taxes</div>
          <div>Free Tool</div>
          <div>Resource Center</div>
          <button>Get Started</button>
        </div>
        
        <div className="burger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
