import React from 'react';
import './LoginModal.css';

function LoginModal({ onClose }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Login</h2>
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <div className="modal-actions">
          <button className="btn-close" onClick={onClose}>Fechar</button>
          <button className="btn-login">Entrar</button>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;