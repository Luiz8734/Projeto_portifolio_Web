import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaHeart, 
  FaCode,
  FaHome,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGraduationCap
} from 'react-icons/fa';
import { personalInfo } from '../data/data';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>
              <FaCode className="footer-icon" /> {personalInfo.name}
            </h3>
            <p>{personalInfo.description}</p>
            <div className="footer-social">
              <a 
                href={personalInfo.socialMedia.github} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a 
                href={personalInfo.socialMedia.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a 
                href="mailto:seu-email@exemplo.com" 
                aria-label="Email"
                title="Email"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>
              <FaFolderOpen className="footer-icon-small" /> Navegação
            </h4>
            <ul>
              <li>
                <Link to="/">
                  <FaHome className="footer-link-icon" /> Início
                </Link>
              </li>
              <li>
                <Link to="/projects">
                  <FaFolderOpen className="footer-link-icon" /> Projetos
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <FaEnvelopeOpen className="footer-link-icon" /> Contato
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>
              <FaCode className="footer-icon-small" /> Projetos
            </h4>
            <ul>
              <li><a href={personalInfo.socialMedia.github} target="_blank" rel="noopener noreferrer">Vinheria Agnello</a></li>
              <li><a href={personalInfo.socialMedia.github} target="_blank" rel="noopener noreferrer">LNK Tech</a></li>
              <li><a href={personalInfo.socialMedia.github} target="_blank" rel="noopener noreferrer">Passa a Bola</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>
              <FaGraduationCap className="footer-icon-small" /> Skills
            </h4>
            <div className="skills-list">
              {personalInfo.skills.slice(0, 6).map((skill, index) => (
                <span key={index} className="skill-item">{skill}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>
              <FaCalendarAlt className="footer-icon-inline" /> © {currentYear} {personalInfo.name}
            </p>
            <p className="footer-location">
              <FaMapMarkerAlt className="footer-icon-inline" /> São Paulo, SP - Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
