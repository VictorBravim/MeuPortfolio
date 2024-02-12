import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <nav>
        <div className="logo">
          <span>V</span>ictor
        </div>
        <input type="checkbox" id="click" />
        <label htmlFor="click" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      {/* Barra */}
      <div className="bar">
        <a target="_blank" aria-label="Link Github" href="https://github.com/VictorBravim">
          <i className='bx bxl-github'></i>
        </a>
        <a target="_blank" aria-label="Link Linkedin" href="https://www.linkedin.com/in/victor-bravim-4b6871275/">
          <i className='bx bxl-linkedin'></i>
        </a>
        <a target="_blank" aria-label="Link Instagram" href="https://www.instagram.com/victorbravim_/">
          <i className='bx bxl-instagram'></i>
        </a>
        <a target="_blank" aria-label="Link whatsapp" href="https://api.whatsapp.com/send?phone=5512996839077">
          <i className='bx bxl-whatsapp'></i>
        </a>
        <div className="barra"></div>
      </div>

      {/* Content */}
      <div className="content">
        {/* Container-1 */}
        <div id="inicio" className="container-1">
          <div className="colunas-1">
            <div className="col-1">
              <div className="texto-1">
                <div className="cubo-animation"></div>
                <h3>Olá, eu sou</h3>
                <h1>Victor Bravim</h1>
                <h2>Front-End Developer.</h2>
                <a href="#projetos">
                  <button className="btn-1">Conheça meu portfólio
                    <i className='bx bx-send'></i>
                  </button>
                </a>
              </div>
            </div>
            <div className="col-2">
              <div className="banner-1">
                <img src="/img/notebook.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Outros containers e conteúdos aqui */}

      </div>
    </div>
  );
}

export default App;
