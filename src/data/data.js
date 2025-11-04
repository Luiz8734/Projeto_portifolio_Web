// Projetos

export const personalInfo = {
  name: "Luiz Antonio Morais Santos",
  age: 18,
  position: "Estudante de Engenharia de Software",
  company: "FIAP",
  description: "Estudante de Engenharia de Software na FIAP, buscando minha primeira oportunidade profissional na área de tecnologia. Tenho interesse por desenvolvimento web, backend e soluções em nuvem, além de gostar de criar sistemas que unem tecnologia, design e impacto real.",
  education: "Bacharelando em Engenharia de Software na FIAP",
  bio: "Sou uma pessoa curiosa, dedicada e apaixonada por resolver problemas através de código, sempre buscando aprimorar minhas habilidades técnicas e aprender novas ferramentas. Tenho o objetivo de aplicar meus conhecimentos, aprender continuamente e crescer como desenvolvedor.",
  skills: [
    "Java",
    "JavaScript",
    "C++",
    "Python",
    "SQL",
    "Spring Boot",
    "React",
    "Tailwind CSS",
    "Bootstrap",
    "MySQL",
    "PostgreSQL",
    "Git",
    "GitHub",
    "AWS (EC2, S3, RDS)",
    "Figma",
    "Wokwi",
    "Vercel",
    "APIs REST",
    "IoT"
  ],
  socialMedia: {
    github: "https://github.com/Luiz8734",
    linkedin: "https://linkedin.com/in/luiz-morais-0b048727b"
  },
  
  experience: [
    {
      company: "FIAP",
      position: "Estudante de Engenharia de Software",
      period: "2024 - Presente",
      description: "Bacharelado em Engenharia de Software, desenvolvendo habilidades em desenvolvimento web, backend, banco de dados e soluções em nuvem.",
      technologies: ["Java", "JavaScript", "Python", "SQL", "React", "AWS"]
    }
  ],
  achievements: [
    {
      title: "Desenvolvedor Full Stack",
      description: "Projetos em desenvolvimento web e IoT",
      icon: "💻"
    },
    {
      title: "Estudante FIAP",
      description: "Engenharia de Software",
      icon: "🎓"
    },
    {
      title: "Projetos IoT",
      description: "Sistemas com Arduino e sensores",
      icon: "🔌"
    }
  ],
  stats: {
    projectsCompleted: 6,
    technologiesUsed: 25,
    yearsExperience: 0,
    companiesWorked: 0
  },
  interests: [
    "Desenvolvimento Web",
    "Backend",
    "Soluções em Nuvem",
    "IoT",
    "Tecnologia e Impacto Social"
  ]
};


export const projects = [
  {
    id: 1,
    name: "Vinheria Agnello – Sistema de Monitoramento com Arduino",
    description: "Um sistema IoT desenvolvido para controlar luminosidade, temperatura e umidade em adegas, utilizando Arduino, sensores DHT22 e LDR, LEDs, buzzer e display LCD I2C. O projeto emite alertas visuais e sonoros conforme as faixas de valores e exibe as informações em tempo real no display.",
    technologies: ["C++", "Arduino IDE", "DHT22", "LDR", "Buzzer", "LCD I2C"],
    link: "https://github.com/Luiz8734/Projeto-IoT-Monitoramento-Ambiental-com-ESP32-e-FIWARE.git",
    image:  require('../assets/vinheria.jpg'),
    category: "IoT",
    status: "Completo",
    detailedDescription: "Sistema completo de monitoramento ambiental para adegas, desenvolvido com Arduino. O sistema integra múltiplos sensores para garantir condições ideais de armazenamento de vinhos, com alertas automáticos quando os parâmetros saem dos valores ideais."
  },
  {
    id: 2,
    name: "LNK Tech – Sistema de Alerta de Enchentes",
    description: "Projeto de automação ambiental para monitorar enchentes, integrando sensores DHT22, ultrassônico, de fluxo e LDR, com LEDs e buzzer para alertas. Simulado no Wokwi, o sistema identifica risco de enchente com base em temperatura, umidade e nível da água.",
    technologies: ["C++", "Arduino", "Wokwi", "Sensores IoT", "DHT22", "Sensor Ultrassônico"],
    link: "https://github.com/Luiz8734/Projeto_Sistema_de_Enchentes.git",
    image:  require('../assets/enchente.jpg'),
    category: "IoT",
    status: "Completo",
    detailedDescription: "Sistema inteligente de monitoramento de enchentes que utiliza múltiplos sensores para detectar condições de risco. O projeto foi desenvolvido e simulado na plataforma Wokwi, demonstrando a capacidade de integração de diferentes sensores IoT para soluções ambientais."
  },
  {
    id: 3,
    name: "Passa a Bola – Futebol Feminino",
    description: "Aplicativo web criado para valorizar o futebol feminino, com seções de história, inscrição em campeonatos, vídeos e cadastro de jogadoras. Possui design moderno, responsivo e efeitos parallax.",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Figma"],
    link: "https://github.com/Luiz8734/Projeto_passa-a-bola-react-api.git",
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800",
    category: "Desenvolvimento Web",
    status: "Completo",
    detailedDescription: "Plataforma web dedicada ao futebol feminino, desenvolvida com foco em design moderno e experiência do usuário. O projeto inclui prototipação no Figma e implementação responsiva com Tailwind CSS, oferecendo uma experiência visual impactante."
  },
  {
    id: 4,
    name: "Portfólio — Luiz Antonio Morais Santos",
    description: "Site moderno desenvolvido em React, apresentando projetos, habilidades e informações de contato de forma elegante e interativa. Conta com menu responsivo, apresentação pessoal, lista de projetos com busca, rotas dinâmicas, formulário validado, integração com redes sociais e design profissional nas cores azul, branco e preto.",
    technologies: ["React", "React Router DOM", "CSS3", "JavaScript", "Framer Motion", "React Icons"],
    link: "https://github.com/Luiz8734/Projeto_portifolio_Web.git",
    image: require('../assets/portifoli.jpg'),
    category: "Frontend",
    status: "Completo",
    detailedDescription: "Portfólio pessoal desenvolvido com React, utilizando as melhores práticas de desenvolvimento web moderno. O projeto demonstra habilidades em React Router DOM para navegação, Framer Motion para animações suaves, e design responsivo com foco em experiência do usuário. O design minimalista e profissional transmite seriedade e confiança, utilizando uma paleta de cores azul, branco e preto."
  },
  {
    id: 5,
    name: "Gerenciador de Jogadoras de Futebol Feminino",
    description: "Sistema completo de gerenciamento de jogadoras desenvolvido em HTML5, CSS3, JavaScript e LocalStorage. Permite cadastro completo com informações detalhadas, busca avançada, filtros, favoritos, estatísticas e exportação de dados.",
    technologies: ["HTML5", "CSS3", "JavaScript", "LocalStorage", "JSON"],
    link: "https://github.com/Luiz8734/Projeto_Gerenciador_Jogadoras.git",
    image: require('../assets/gerenciador.jpg'),
    imageFallback: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800",
    category: "Desenvolvimento Web",
    status: "Completo",
    detailedDescription: "Aplicação web completa para gerenciamento de jogadoras de futebol feminino, desenvolvida com tecnologias web nativas. O sistema utiliza LocalStorage para persistência de dados no navegador, permitindo que as informações sejam mantidas mesmo após o fechamento da página. Inclui funcionalidades completas de CRUD (Create, Read, Update, Delete), sistema de favoritos, busca avançada, filtros por categoria, estatísticas e exportação de dados."
  },
  {
    id: 6,
    name: "🌱 E-commerce Sustentável (EcoTrend)",
    description: "E-commerce completo de produtos ecológicos com carrossel de banners, grid de produtos, sistema de busca, filtros avançados, carrinho de compras, checkout, wishlist, avaliações de produtos, formulário de contato e design totalmente responsivo.",
    technologies: ["HTML", "CSS", "Bootstrap", "JavaScript", "LocalStorage"],
    link: "https://github.com/Luiz8734/Projeto_E_commerce_Sustentavel.git",
    image: "/assets/ecommerce-capa.jpg",
    imageFallback:  require('../assets/sustentavel.jpg'),
    category: "Frontend",
    status: "Completo",
    detailedDescription: "E-commerce completo focado em produtos sustentáveis e ecológicos, desenvolvido com Bootstrap para garantir responsividade total. O projeto inclui carrossel de banners promocionais, grid de produtos organizados, sistema de busca e filtros avançados por categoria e preço, carrinho de compras funcional com LocalStorage, processo de checkout, wishlist de produtos favoritos, sistema de avaliações, formulário de contato funcional e design moderno que reflete a identidade sustentável da marca."
  }
];

// Informações pessoais de Luiz Antonio Morais Santos

