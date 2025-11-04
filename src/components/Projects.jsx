import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch, FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import { projects } from '../data/data';
import './Projects.css';

const Projects = () => {
  const [busca, setBusca] = useState('');

  const projetos = projects.filter(project =>
    project.name.toLowerCase().includes(busca.toLowerCase()) ||
    project.description.toLowerCase().includes(busca.toLowerCase()) ||
    project.technologies.some(tech => 
      tech.toLowerCase().includes(busca.toLowerCase())
    )
  );

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const card = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="projects">
      <div className="container">
        <motion.h1 
          className="page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Meus Projetos
        </motion.h1>
        
        <motion.div 
          className="search-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="Buscar projetos por nome, descrição ou tecnologia..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              className="search-input"
            />
          </div>
        </motion.div>

        {projetos.length > 0 ? (
          <motion.div 
            className="projects-grid"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {projetos.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={card}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="project-image">
                  <img 
                    src={project.image || project.imageFallback} 
                    alt={project.name}
                    onError={(e) => {
                      if (project.imageFallback) {
                        e.target.src = project.imageFallback;
                      }
                    }}
                  />
                  <div className="project-overlay">
                    <div className="project-status">{project.status}</div>
                  </div>
                </div>
                <div className="project-content">
                  <div className="project-header">
                    <h3 className="project-title">{project.name}</h3>
                    <span className="project-category">{project.category}</span>
                  </div>
                  <p className="project-description">{project.description}</p>
                  <div className="project-technologies">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="tech-tag"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                  <div className="project-links">
                    <Link 
                      to={`/projects/${project.id}`} 
                      className="btn btn-outline"
                    >
                      <FaCode /> Detalhes
                    </Link>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            className="no-projects"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="no-projects-content">
              <FaSearch className="no-projects-icon" />
              <h3>Nenhum projeto localizado</h3>
              <p>
                Não encontramos projetos que correspondam à sua busca por "{busca}".
                Tente usar termos diferentes ou verifique a ortografia.
              </p>
              <motion.button 
                onClick={() => setBusca('')}
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Limpar Busca
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Projects;
