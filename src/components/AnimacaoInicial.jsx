import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AnimacaoInicial.css';

const AnimacaoInicial = () => {
  const [visivel, setVisivel] = useState(true);
  const palavras = ['Olá,', 'eu', 'sou', 'Luiz', 'Morais'];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisivel(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const palavra = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const particula = {
    animate: {
      x: [0, 100, -100, 0],
      y: [0, -100, 100, 0],
      opacity: [0.3, 0.8, 0.3],
      scale: [1, 1.2, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <AnimatePresence>
      {visivel && (
        <motion.div
          className="animacao-inicial-modern"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={container}
        >
          {/* Partículas de fundo */}
          <div className="particulas-fundo">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="particula"
                variants={particula}
                animate="animate"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`
                }}
              />
            ))}
          </div>

          {/* Fluxo de luz azul */}
          <motion.div
            className="fluxo-luz"
            animate={{
              x: ['-100%', '200%'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />

          <div className="container-animacao-modern">
            <motion.div className="texto-animacao-modern">
              {palavras.map((palavra, index) => (
                <motion.span
                  key={index}
                  className="palavra-animada"
                  variants={palavra}
                  style={{ marginRight: '0.5rem' }}
                >
                  {palavra}
                </motion.span>
              ))}
            </motion.div>
            <motion.div
              className="subtitulo-animacao-modern"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              Estudante de Engenharia de Software | FIAP
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnimacaoInicial;

