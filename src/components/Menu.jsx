import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Menu.css';

const Menu = () => {
  const [aberto, setAberto] = useState(false);
  const path = useLocation();

  const alternar = () => {
    setAberto(!aberto);
  };

  const fechar = () => {
    setAberto(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={fechar}>
          <div className="logo-container">
            <div className="logo-lm">LM</div>
            <div className="logo-react">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
                <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none"/>
                <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 12 12)"/>
                <ellipse cx="12" cy="12" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 12 12)"/>
              </svg>
            </div>
          </div>
        </Link>
        
        <div className={`nav-menu ${aberto ? 'active' : ''}`}>
          <Link 
            to="/" 
            className={`nav-link ${path.pathname === '/' ? 'active' : ''}`}
            onClick={fechar}
          >
            Início
          </Link>
          <Link 
            to="/projects" 
            className={`nav-link ${path.pathname === '/projects' ? 'active' : ''}`}
            onClick={fechar}
          >
            Projetos
          </Link>
          <Link 
            to="/contact" 
            className={`nav-link ${path.pathname === '/contact' ? 'active' : ''}`}
            onClick={fechar}
          >
            Contato
          </Link>
        </div>
        
        <div className="nav-icon" onClick={alternar}>
          {aberto ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Menu;
