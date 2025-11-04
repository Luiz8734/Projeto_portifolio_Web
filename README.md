# 💼 Portfólio — Luiz Antonio Morais Santos

Um portfólio moderno e responsivo desenvolvido em **React**, apresentando projetos, habilidades e informações de contato de forma elegante e interativa. O portfólio foi desenvolvido com um estilo minimalista e profissional, utilizando as cores azul (#007bff), branco (#ffffff) e preto (#000000) para transmitir seriedade, confiança e profissionalismo.

🌐 **Acesse o projeto online:**  
👉 [Link da Vercel] (será atualizado após deploy)

---

## 🚀 Funcionalidades

- 🧭 **Menu responsivo** com navegação por rotas usando react-router-dom
- 👨‍💻 **Apresentação pessoal** completa com informações acadêmicas e profissionais
- 🧩 **Lista de projetos** com barra de busca e renderização condicional
- 🔍 **Detalhes de projetos** com rotas dinâmicas para exibir informações individuais
- ✉️ **Formulário de contato funcional** com validação
- 🌐 **Links para redes sociais** (GitHub e LinkedIn) usando react-icons
- 🎨 **Design moderno e minimalista** com cores azul, branco e preto
- 📱 **Totalmente responsivo** (mobile, tablet e desktop)
- 💫 **Animações suaves** e efeitos visuais modernos

---

## 🛠️ Tecnologias Utilizadas

- ⚛️ **React 18** - Biblioteca JavaScript para construção de interfaces
- 🧭 **React Router DOM** - Roteamento para aplicações React
- 🎨 **React Icons** - Biblioteca de ícones
- 💅 **CSS3** - Estilização com Flexbox e Grid
- ⚙️ **JavaScript ES6+** - Linguagem de programação

---

## 📦 Instalação e Execução Local

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Luiz8734/meuPortifolio.git
   cd meuPortifolio
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Execute o projeto:**
   ```bash
   npm start
   # ou
   npm run dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:3000
   ```

---

## 🌍 Deploy

O projeto está configurado para ser publicado na **Vercel**:

### Passos para Deploy na Vercel:

1. **Instale a CLI da Vercel (se ainda não tiver):**
   ```bash
   npm install -g vercel
   ```

2. **Faça login na Vercel:**
   ```bash
   vercel login
   ```

3. **Faça o deploy:**
   ```bash
   vercel
   ```

4. **Ou conecte seu repositório GitHub:**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub
   - Importe o repositório
   - A Vercel detectará automaticamente o projeto React e fará o deploy

---

## 🎨 Características do Design

- **Cores principais:** 
  - Azul: `#007bff` (cor primária)
  - Branco: `#ffffff` (fundo e texto)
  - Preto: `#000000` (menu e contraste)
- **Tipografia:** Fontes do sistema para melhor performance
- **Layout:** Baseado em **Grid** e **Flexbox**
- **Animações:** Transições suaves e efeitos de hover
- **Ícones:** Via `react-icons`
- **Responsividade:** Adaptação automática para diferentes tamanhos de tela

---

## 📱 Responsividade

O portfólio adapta-se automaticamente a diferentes dispositivos:

- 💻 **Desktop:** 1200px+
- 📱 **Tablet:** 768px – 1199px
- 📞 **Mobile:** até 767px

---

## 🧩 Estrutura do Projeto

```
src/
├── components/
│   ├── Menu.jsx / Menu.css
│   ├── Home.jsx / Home.css
│   ├── Projects.jsx / Projects.css
│   ├── ProjectDetail.jsx / ProjectDetail.css
│   ├── Contact.jsx / Contact.css
│   ├── Footer.jsx / Footer.css
│   └── ItuberAnimation.jsx / ItuberAnimation.css
├── data/
│   └── data.js
├── App.jsx / App.css
├── index.jsx / index.css
└── public/
    └── index.html
```

---

## 📄 Páginas e Rotas

| Rota | Descrição |
|------|------------|
| `/` | Página inicial com apresentação pessoal |
| `/projects` | Lista de projetos com barra de busca |
| `/projects/:id` | Página de detalhes do projeto individual |
| `/contact` | Formulário de contato |

---

## 🎯 Funcionalidades Implementadas

✅ Menu com rotas usando react-router-dom  
✅ Lista de projetos com busca em tempo real  
✅ Renderização condicional ("Nenhum projeto localizado")  
✅ Rotas dinâmicas para detalhes de projetos  
✅ Formulário de contato funcional  
✅ Links para GitHub e LinkedIn  
✅ Design moderno com cores azul, branco e preto  
✅ Totalmente responsivo  
✅ Efeitos visuais e hover  
✅ Seções expandidas (experiência, conquistas, interesses)  
✅ Estatísticas na home  

---

## 👨‍💻 Sobre o Desenvolvedor

**Luiz Antonio Morais Santos**  
🎓 Estudante de Engenharia de Software — FIAP  
💻 18 anos, buscando primeira oportunidade profissional na área de tecnologia  
🎯 Interesse por desenvolvimento web, backend e soluções em nuvem  

**Objetivo:** Aplicar conhecimentos, aprender continuamente e crescer como desenvolvedor, criando sistemas que unem tecnologia, design e impacto real.

**Perfil:** Pessoa curiosa, dedicada e apaixonada por resolver problemas através de código, sempre buscando aprimorar habilidades técnicas e aprender novas ferramentas.

---

## 📚 Projetos Destacados

### 1. Vinheria Agnello – Sistema de Monitoramento com Arduino
Sistema IoT desenvolvido para controlar luminosidade, temperatura e umidade em adegas, utilizando Arduino, sensores DHT22 e LDR, LEDs, buzzer e display LCD I2C.

**Tecnologias:** C++ (Arduino IDE), DHT22, LDR, Buzzer, LCD I2C

### 2. LNK Tech – Sistema de Alerta de Enchentes
Projeto de automação ambiental para monitorar enchentes, integrando sensores DHT22, ultrassônico, de fluxo e LDR, com LEDs e buzzer para alertas.

**Tecnologias:** C++ (Arduino), Wokwi, sensores IoT

### 3. Passa a Bola – Futebol Feminino
Aplicativo web criado para valorizar o futebol feminino, com seções de história, inscrição em campeonatos, vídeos e cadastro de jogadoras.

**Tecnologias:** HTML, CSS, JavaScript, Tailwind CSS, Figma

### 4. Painel de Países – Integração com API REST e Google Sheets
Projeto integrando Google Apps Script e REST Countries API para exibir e gerenciar dados de países em uma planilha, com automações e atualização em tempo real.

**Tecnologias:** Google Apps Script, JavaScript, HTML, CSS

---

## 💻 Skills

**Linguagens:** Java, JavaScript, C++, Python, SQL

**Frameworks e Bibliotecas:** Spring Boot, React, Tailwind CSS, Bootstrap

**Banco de Dados:** MySQL, PostgreSQL

**Ferramentas e Plataformas:** Git, GitHub, AWS (EC2, S3, RDS), Figma, Wokwi, Vercel

**Outros Conhecimentos:** Integração com APIs, IoT, RESTful Services, UI/UX, Deploy em Nuvem

---

## 📬 Contato

- **GitHub:** [@Luiz8734](https://github.com/Luiz8734)  
- **LinkedIn:** [luiz-morais-0b048727b](https://linkedin.com/in/luiz-morais-0b048727b)  

---

## 📝 Licença

Este projeto está sob a licença **MIT** — consulte o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🖼️ Screenshots

_Screenshots serão adicionados após o deploy_

---

💡 _Desenvolvido por **Luiz Antonio Morais Santos**_
