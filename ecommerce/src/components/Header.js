import React from 'react';
import './Header.css';
import Nav from './Nav';

function Header({ children }) {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">Loja Gambeta</div>
      </div>

      <div className="header-center">
        <Nav />
      </div>

      <div className="header-right">
        {children}
      </div>
    </header>
  );
}

export default Header;
