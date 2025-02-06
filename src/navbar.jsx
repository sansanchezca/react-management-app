import React, { useState } from 'react'; // Only import React once and include useState
import logo from './logo.svg'; // Import the logo
import './navbar.css'; // Import the CSS for styling

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // useState hook for toggling menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close state
  };

  return (
    <nav className="navbar">
      <img src={logo} className="navbar-logo" alt="logo" />
      <button className='hamburger' onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}> {/* Add 'open' class when menu is open */}
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="signin" className="signin-btn">Sign in</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
