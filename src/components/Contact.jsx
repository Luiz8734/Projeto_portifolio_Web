import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane, FaUser, FaComment, FaGithub, FaLinkedin, FaCheckCircle } from 'react-icons/fa';
import { personalInfo } from '../data/data';
import './Contact.css';

const Contact = () => {
  const [dados, setDados] = useState({
    nome: '',
    email: '',
    assunto: '',
    mensagem: ''
  });

  const [enviando, setEnviando] = useState(false);
  const [status, setStatus] = useState(null);

  const mudanca = (e) => {
    setDados({
      ...dados,
      [e.target.name]: e.target.value
    });
  };

  const envio = async (e) => {
    e.preventDefault();
    
    const msg = `
Nome: ${dados.nome}
Email: ${dados.email}
Assunto: ${dados.assunto}
Mensagem: ${dados.mensagem}
    `.trim();
    
    alert(msg);
    
    setEnviando(true);
    
    setTimeout(() => {
      setEnviando(false);
      setStatus('sucesso');
      setDados({
        nome: '',
        email: '',
        assunto: '',
        mensagem: ''
      });
      
      setTimeout(() => {
        setStatus(null);
      }, 3000);
    }, 1000);
  };

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="contact">
      <div className="container">
        <motion.h1 
          className="page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Entre em Contato
        </motion.h1>
        
        <motion.div 
          className="contact-content"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="contact-info" variants={item}>
            <h2>Onde me encontrar</h2>
            <p>
              Sinta-se livre para conectar comigo através das redes sociais ou 
              enviar uma mensagem diretamente pelo formulário. Estou sempre aberto 
              para conversar sobre projetos, oportunidades ou qualquer assunto relacionado à tecnologia!
            </p>
            
            <div className="contact-details">
              <motion.div 
                className="contact-item"
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="contact-icon-wrapper">
                  <FaEnvelope className="contact-icon" />
                </div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:luizmoraissantos17@gmail.com">luizmoraissantos17@gmail.com</a>
                </div>
              </motion.div>
              
              <motion.div 
                className="contact-item"
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="contact-icon-wrapper">
                  <FaPhone className="contact-icon" />
                </div>
                <div>
                  <h4>Telefone</h4>
                  <a href="tel:+5511994221672">(11) 99422-1672</a>
                </div>
              </motion.div>
              
              <motion.div 
                className="contact-item"
                whileHover={{ x: 5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="contact-icon-wrapper">
                  <FaMapMarkerAlt className="contact-icon" />
                </div>
                <div>
                  <h4>Localização</h4>
                  <p>São Paulo, SP - Brasil</p>
                </div>
              </motion.div>
            </div>

            <div className="social-links">
              <h4>Redes Sociais</h4>
              <div className="social-buttons">
                <motion.a 
                  href={personalInfo.socialMedia.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn-modern github"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaGithub /> GitHub
                </motion.a>
                <motion.a 
                  href={personalInfo.socialMedia.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-btn-modern linkedin"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaLinkedin /> LinkedIn
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div className="contact-form-container" variants={item}>
            <form className="contact-form" onSubmit={envio}>
              <h3>Me envie uma mensagem! 👋</h3>
              
              <div className="form-group">
                <label htmlFor="nome">
                  <FaUser className="input-icon" />
                  Nome
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={dados.nome}
                  onChange={mudanca}
                  required
                  placeholder="Digite seu nome"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">
                  <FaEnvelope className="input-icon" />
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={dados.email}
                  onChange={mudanca}
                  required
                  placeholder="Digite seu e-mail"
                />
              </div>

              <div className="form-group">
                <label htmlFor="assunto">
                  <FaComment className="input-icon" />
                  Assunto
                </label>
                <input
                  type="text"
                  id="assunto"
                  name="assunto"
                  value={dados.assunto}
                  onChange={mudanca}
                  required
                  placeholder="Qual o assunto da sua mensagem?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="mensagem">
                  <FaComment className="input-icon" />
                  Mensagem
                </label>
                <textarea
                  id="mensagem"
                  name="mensagem"
                  value={dados.mensagem}
                  onChange={mudanca}
                  required
                  rows="5"
                  placeholder="Digite sua mensagem..."
                ></textarea>
              </div>

              <motion.button 
                type="submit" 
                className={`submit-btn ${enviando ? 'submitting' : ''}`}
                disabled={enviando}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {enviando ? (
                  'Enviando...'
                ) : (
                  <>
                    <FaPaperPlane />
                    Enviar
                  </>
                )}
              </motion.button>

              {status === 'sucesso' && (
                <motion.div 
                  className="success-message"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaCheckCircle />
                  <p>Mensagem enviada com sucesso! Entrarei em contato em breve.</p>
                </motion.div>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
