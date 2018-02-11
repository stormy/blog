import React from 'react';
import Link from 'gatsby-link';

import quora from '../img/quora-icon.svg';

const Navbar = () => (
  <nav className="navbar is-transparent">
    <div className="container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <h1>Stormy Shippy</h1>
        </Link>
      </div>
      <div className="navbar-start">
        <Link className="navbar-item" to="/about">
          About
        </Link>
      </div>
      <div className="navbar-end">
        <a className="navbar-item" href="https://www.quora.com/profile/Stormy-Shippy/" target="_blank" rel="noopener noreferrer">
          <span className="icon">
            <img src={quora} alt="Stormy Shippy's Quora Profile" />
          </span>
        </a>
      </div>
    </div>
  </nav>
);

export default Navbar;
