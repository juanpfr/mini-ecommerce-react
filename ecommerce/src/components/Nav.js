import React from 'react';
import './Nav.css';

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li><a href="#home">Início</a></li>
        <li><a href="#produtos">Produtos</a></li>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
