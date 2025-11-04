import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaGithub, FaArrowLeft, FaExternalLinkAlt } from 'react-icons/fa';
import { projects } from '../data/data';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-detail">
        <div className="container">
          <div className="not-found">
            <h2>Projeto não encontrado</h2>
            <p>O projeto que você está procurando não existe.</p>
            <Link to="/projects" className="btn btn-primary">
              <FaArrowLeft /> Voltar aos Projetos
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="container">
        <div className="back-button">
          <Link to="/projects" className="btn btn-outline">
            <FaArrowLeft /> Voltar aos Projetos
          </Link>
        </div>

        <div className="project-header">
          <div className="project-image-large">
            <img 
              src={project.image || project.imageFallback} 
              alt={project.name}
              onError={(e) => {
                if (project.imageFallback) {
                  e.target.src = project.imageFallback;
                }
              }}
            />
          </div>
          <div className="project-info">
            <h1 className="project-title">{project.name}</h1>
            <p className="project-description">{project.description}</p>
            
            <div className="project-technologies">
              <h3>Tecnologias Utilizadas:</h3>
              <div className="tech-tags">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="project-links">
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FaGithub /> Ver no GitHub
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        </div>

        <div className="project-details">
          <div className="detail-section">
            <h3>Sobre o Projeto</h3>
            <p>{project.description}</p>
          </div>

          <div className="detail-section">
            <h3>Funcionalidades</h3>
            <ul>
              {getFeatures(project.name).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="detail-section">
            <h3>Tecnologias e Ferramentas</h3>
            <div className="tech-grid">
              {project.technologies.map((tech, index) => (
                <div key={index} className="tech-item">
                  <span className="tech-name">{tech}</span>
                  <span className="tech-description">{getDesc(tech)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// funcao para obter funcionalidades especificas de cada projeto
const getFeatures = (nome) => {
  const features = {
    'Vinheria Agnello – Sistema de Monitoramento com Arduino': [
      'Monitoramento de temperatura e umidade em tempo real',
      'Controle de luminosidade com sensor LDR',
      'Alertas visuais com LEDs',
      'Alertas sonoros com buzzer',
      'Display LCD I2C para visualização de dados',
      'Sistema de alertas conforme faixas de valores'
    ],
    'LNK Tech – Sistema de Alerta de Enchentes': [
      'Monitoramento de temperatura e umidade',
      'Detecção de nível de água com sensor ultrassônico',
      'Sensor de fluxo para medição de água',
      'Sistema de alertas com LEDs e buzzer',
      'Simulação no Wokwi',
      'Identificação automática de risco de enchente'
    ],
    'Passa a Bola – Futebol Feminino': [
      'Seção de história do futebol feminino',
      'Sistema de inscrição em campeonatos',
      'Galeria de vídeos',
      'Cadastro de jogadoras',
      'Design moderno e responsivo',
      'Efeitos parallax'
    ],
    'Portfólio — Luiz Antonio Morais Santos': [
      'Página inicial com apresentação pessoal moderna e animada',
      'Menu responsivo com navegação por rotas',
      'Lista de projetos com barra de busca e renderização dinâmica',
      'Detalhes individuais dos projetos com rotas dinâmicas',
      'Formulário de contato funcional com validação e alerta ao enviar',
      'Animações suaves e efeitos de transição modernos',
      'Design responsivo e profissional'
    ],
    'Gerenciador de Jogadoras de Futebol Feminino': [
      'Cadastro completo de jogadoras com informações detalhadas (nome, idade, posição, time, etc.)',
      'Sistema CRUD completo (Criar, Ler, Atualizar, Deletar)',
      'Busca avançada por nome, posição ou time',
      'Filtros por categoria (posição, idade, status)',
      'Sistema de favoritos para destacar jogadoras importantes',
      'Estatísticas e contadores de jogadoras cadastradas',
      'Exportação de dados em formato JSON',
      'Persistência de dados com LocalStorage',
      'Interface intuitiva e responsiva',
      'Validação de formulários e tratamento de erros'
    ],
    '🌱 E-commerce Sustentável (EcoTrend)': [
      'Carrossel de banners promocionais com produtos em destaque',
      'Grid de produtos organizados por categoria',
      'Sistema de busca de produtos por nome ou descrição',
      'Filtros avançados por categoria, preço e disponibilidade',
      'Carrinho de compras funcional com LocalStorage',
      'Processo de checkout completo com cálculo de frete',
      'Wishlist para salvar produtos favoritos',
      'Sistema de avaliações e comentários de produtos',
      'Páginas de detalhes do produto com galeria de imagens',
      'Formulário de contato funcional',
      'Design totalmente responsivo para mobile, tablet e desktop',
      'Cálculo de totais e descontos automáticos'
    ]
  };
  
  if (features[nome]) {
    return features[nome];
  }
  
  if (nome.includes('Vinheria')) {
    return features['Vinheria Agnello – Sistema de Monitoramento com Arduino'];
  }
  if (nome.includes('LNK')) {
    return features['LNK Tech – Sistema de Alerta de Enchentes'];
  }
  if (nome.includes('Passa')) {
    return features['Passa a Bola – Futebol Feminino'];
  }
  if (nome.includes('Gerenciador') || nome.includes('Jogadoras')) {
    return features['Gerenciador de Jogadoras de Futebol Feminino'];
  }
  if (nome.includes('E-commerce') || nome.includes('EcoTrend')) {
    return features['🌱 E-commerce Sustentável (EcoTrend)'];
  }
  if (nome.includes('Portfólio')) {
    return features['Portfólio — Luiz Antonio Morais Santos'];
  }
  
  return ['Funcionalidades específicas do projeto'];
};

// função para obter descricao das tecnologias
const getDesc = (tech) => {
  const descricoes = {
    'C++': 'Linguagem de programação para desenvolvimento Arduino',
    'Arduino IDE': 'Ambiente de desenvolvimento para microcontroladores',
    'DHT22': 'Sensor digital de temperatura e umidade',
    'LDR': 'Sensor de luminosidade (Light Dependent Resistor)',
    'Buzzer': 'Componente para alertas sonoros',
    'LCD I2C': 'Display de cristal líquido com interface I2C',
    'Arduino': 'Plataforma de hardware e software open-source',
    'Wokwi': 'Plataforma de simulação para projetos Arduino',
    'Sensores IoT': 'Sensores para Internet das Coisas',
    'Sensor Ultrassônico': 'Sensor para medição de distância',
    'HTML': 'Linguagem de marcação para páginas web',
    'HTML5': 'Versão mais recente do HTML com novos recursos semânticos',
    'CSS': 'Linguagem de estilização para páginas web',
    'CSS3': 'Versão mais recente do CSS com recursos avançados',
    'JavaScript': 'Linguagem de programação para web',
    'Tailwind CSS': 'Framework CSS utilitário',
    'Figma': 'Ferramenta de design e prototipação',
    'Bootstrap': 'Framework CSS para desenvolvimento responsivo',
    'LocalStorage': 'API do navegador para armazenamento local de dados',
    'JSON': 'Formato de dados leve e fácil de ler'
  };
  
  return descricoes[tech] || 'Tecnologia utilizada no projeto';
};

export default ProjectDetail;
