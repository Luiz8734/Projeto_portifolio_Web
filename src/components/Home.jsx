import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode, FaGraduationCap, FaBriefcase, FaTrophy, FaRocket, FaChartLine, FaCog, FaHeart, FaArrowDown } from 'react-icons/fa';
import { SiReact, SiSpring, SiMysql, SiAmazonaws } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { personalInfo } from '../data/data';
import AnimacaoInicial from './AnimacaoInicial';
import './Home.css';
import profilePhoto from '../assets/fotoLuiz.jpg';

const Home = () => {
  const [animacao, setAnimacao] = useState(false);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimacao(false);
      setCarregado(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const rolar = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="home">
      {animacao && <AnimacaoInicial />}
      
      {/* Seção Hero */}
      <section className="hero-section">
        <div className="hero-background">
          <div className="animated-grid"></div>
          <div className="particles-container">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="particle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 5}s`
              }}></div>
            ))}
          </div>
          <div className="light-beams">
            <div className="beam beam-1"></div>
            <div className="beam beam-2"></div>
            <div className="beam beam-3"></div>
          </div>
          <div className="gradient-orbs">
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
          </div>
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="greeting-text">Olá! 👋</span>
            </div>
            <div className="hero-name-intro">
              <span className="name-label">Meu nome é</span>
            </div>
            <h1 className="hero-title">
              <span className="highlight">{personalInfo.name}</span>
            </h1>
            <div className="hero-subtitle">
              <span className="position-text">{personalInfo.position}</span>
              <span className="company-text">| {personalInfo.company}</span>
            </div>
            <p className="hero-description">
              {personalInfo.description}
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-number">{personalInfo.stats.projectsCompleted}+</div>
                <div className="stat-label">Projetos</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{personalInfo.stats.technologiesUsed}+</div>
                <div className="stat-label">Tecnologias</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">{personalInfo.stats.yearsExperience}+</div>
                <div className="stat-label">Anos Exp.</div>
              </div>
            </div>

            <div className="hero-buttons">
              <Link to="/projects" className="btn btn-primary">
                <FaRocket />
                Ver Projetos
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <FaHeart />
                Entre em Contato
              </Link>
            </div>

            <div className="scroll-indicator" onClick={() => rolar('about')}>
              <FaArrowDown />
              <span>Saiba mais</span>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="profile-card">
              <div className="profile-avatar">
                <img src={profilePhoto} alt="Foto de Perfil" className="avatar-photo" />
                <div className="avatar-ring"></div>
              </div>
              <div className="profile-info">
                <h3>{personalInfo.name}</h3>
                <p>{personalInfo.age} anos</p>
                <div className="social-links">
                  <motion.a 
                    href={personalInfo.socialMedia.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link-modern"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ 
                      y: [0, -5, 0],
                    }}
                    transition={{ 
                      y: { 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                      } 
                    }}
                  >
                    <FaGithub />
                  </motion.a>
                  <motion.a 
                    href={personalInfo.socialMedia.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link-modern"
                    whileHover={{ scale: 1.2, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    animate={{ 
                      y: [0, -5, 0],
                    }}
                    transition={{ 
                      y: { 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut",
                        delay: 0.5
                      } 
                    }}
                  >
                    <FaLinkedin />
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Sobre Mim */}
      <section id="about" className="about-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-text">Sobre Mim</span>
            <div className="title-line"></div>
          </h2>
          
          <div className="about-content">
            <div className="about-text">
              <p className="bio-text">{personalInfo.bio}</p>
              
              <div className="info-cards">
                <div className="info-card">
                  <FaGraduationCap className="info-icon" />
                  <div className="info-content">
                    <h4>Educação</h4>
                    <p>{personalInfo.education}</p>
                  </div>
                </div>
                <div className="info-card">
                  <FaBriefcase className="info-icon" />
                  <div className="info-content">
                    <h4>Experiência</h4>
                    <p>{personalInfo.position} - {personalInfo.company}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="skills-section">
              <h3>Principais Skills</h3>
              <div className="skills-grid-modern">
                {[
                  { name: 'React', Icon: SiReact, color: '#61DAFB' },
                  { name: 'Java', Icon: FaJava, color: '#ED8B00' },
                  { name: 'Spring Boot', Icon: SiSpring, color: '#6DB33F' },
                  { name: 'SQL', Icon: SiMysql, color: '#4479A1' },
                  { name: 'AWS', Icon: SiAmazonaws, color: '#FF9900' }
                ].map((skill, index) => {
                  const IconComponent = skill.Icon;
                  return (
                    <motion.div
                      key={skill.name}
                      className="skill-card-modern"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ 
                        y: -10,
                        scale: 1.05,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className="skill-icon-wrapper">
                        <IconComponent className="skill-icon" style={{ color: skill.color }} />
                      </div>
                      <span className="skill-name-modern">{skill.name}</span>
                      <div className="skill-glow"></div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Experiência */}
      <section className="experience-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-text">Experiência Profissional</span>
            <div className="title-line"></div>
          </h2>
          
          <div className="experience-timeline">
            {personalInfo.experience.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <div className="timeline-header">
                    <h3>{exp.position}</h3>
                    <span className="timeline-period">{exp.period}</span>
                  </div>
                  <h4 className="timeline-company">{exp.company}</h4>
                  <p className="timeline-description">{exp.description}</p>
                  <div className="timeline-technologies">
                    {exp.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="achievements-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-text">Conquistas</span>
            <div className="title-line"></div>
          </h2>
          
          <div className="achievements-grid">
            {personalInfo.achievements.map((achievement, index) => (
              <div key={index} className="achievement-card">
                <div className="achievement-icon">{achievement.icon}</div>
                <h3>{achievement.title}</h3>
                <p>{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Interesses */}
      <section className="interests-section">
        <div className="container">
          <h2 className="section-title">
            <span className="title-text">Áreas de Interesse</span>
            <div className="title-line"></div>
          </h2>
          
          <div className="interests-grid">
            {personalInfo.interests.map((interest, index) => (
              <div key={index} className="interest-item">
                <div className="interest-icon">
                  {index === 0 && <FaCode />}
                  {index === 1 && <FaCog />}
                  {index === 2 && <FaChartLine />}
                  {index === 3 && <FaRocket />}
                  {index === 4 && <FaChartLine />}
                  {index === 5 && <FaCog />}
                </div>
                <span>{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Pronto para trabalhar juntos?</h2>
            <p>Vamos criar algo incrível que gere impacto real!</p>
            <div className="cta-buttons">
              <Link to="/projects" className="btn btn-primary">
                <FaRocket />
                Ver Meus Projetos
              </Link>
              <Link to="/contact" className="btn btn-outline">
                <FaHeart />
                Vamos Conversar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
