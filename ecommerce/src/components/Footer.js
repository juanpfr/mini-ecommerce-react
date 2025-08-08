import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Loja Gambeta - Todos os direitos reservados.</p>
    </footer>
  );
}

export default Footer;
