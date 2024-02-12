import React from 'react';
import './App.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import notebookImage from './img/notebook.png';
import logo from './img/logo.png';
import html from './img/html.svg';
import css from './img/css.svg';
import js from './img/javascript.svg';
import bs from './img/bootstrap.png';
import tw from './img/tailwindcss.svg';
import ts from './img/typescript.svg';
import php from './img/php.png';
import react from './img/react.svg';
import frame1 from './img/Frame1.png';
import frame2 from './img/Frame2.png';
import frame3 from './img/Frame3.png';

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
          <li><Link to="inicio" smooth={true} duration={1000}>Início</Link></li>
          <li><Link to="sobre" smooth={true} duration={1000}>Sobre</Link></li>
          <li><Link to="habilidades" smooth={true} duration={1000}>Habilidades</Link></li>
          <li><Link to="projetos" smooth={true} duration={1000}>Projetos</Link></li>
          <li><Link to="contato" smooth={true} duration={1000}>Contato</Link></li>
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
                <img src={notebookImage} alt="" />
              </div>
            </div>
          </div>
        </div>

        {/* Container-2 */}
        <div id="sobre" className="container-2">
          <div className="colunas-2">
            <div className="texto-2">
              <h2>Sobre</h2>
              <span className="aboutspan">
                <i className='bx bx-user'></i>
                About
              </span>
            </div>
            <div className="col-3">
              <div className="banner-2">
                <img src={logo} alt="" />
              </div>
              <div className="texto-3">
                <p className="p-texto-3">
                  Sou um desenvolvedor Front-End que vive em Lorena SP, Curso Faculdade em
                  Análise e desenvolvimento de sistemas.
                  <br />
                  <br />
                  Meu interesse e primeiro contato com desenvolvimento web começou em 2020, com a criação de
                  um site feito em Html, Css e JavaScript.
                </p>
                <a className="btn-2-a" href="Curriculo Aqui!" download="">
                  <button className="btn-2">Download Curriculo
                    <i className='bx bx-download'></i>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Container-3 */}
        <div id="habilidades" className="container-3">
          <div className="colunas-3">
            <div className="texto-2">
              <h2>Habilidades</h2>
              <span className="skillspan">
                <i className='bx bx-task-x'></i>
                Skills
              </span>
            </div>
            <div className="col-4">
              <div className="card">
                <img src={html} alt="" />
                <h1><span>H</span>TML</h1>
              </div>
              <div className="card">
                <img src={css} alt="" />
                <h1><span>C</span>SS</h1>
              </div>
              <div className="card">
                <img src={js} alt="" />
                <h1><span>J</span>avaScript</h1>
              </div>
              <div className="card">
                <img src={ts} alt="" />
                <h1><span>T</span>ypeScript</h1>
              </div>
              <div className="card">
                <img src={bs} alt="" />
                <h1><span>B</span>ootstrap</h1>
              </div>
              <div className="card">
                <img src={php} alt="" />
                <h1><span>P</span>HP</h1>
              </div>
              <div className="card">
                <img src={react} alt="" />
                <h1><span>R</span>eact</h1>
              </div>
              <div className="card">
                <img src={tw} alt="" />
                <h1><span>T</span>ailwind</h1>
              </div>
            </div>
          </div>
        </div>

        {/* Container-4 */}
        <div id="projetos" className="container-4">
          <div className="colunas-4">
            <div className="texto-2">
              <h2>Projetos</h2>
              <span className="projetospan">
                <i className='bx bx-briefcase'></i>
                Projects
              </span>
            </div>
            <div className="col-5">
              <div className="grid-block">
                <div className="tile">
                  <a className="tile-link" href="index.html">
                    <img className='tile-img tile-img1' src={frame1} alt="" />
                  </a>
                </div>
              </div>
              <div className="grid-block">
                <div className="tile">
                  <a className="tile-link" href="index.html">
                    <img className='tile-img tile-img2' src={frame2} alt="" />
                  </a>
                </div>
              </div>
              <div className="grid-block">
                <div className="tile">
                  <a className="tile-link" href="index.html">
                    <img className='tile-img tile-img3' src={frame3} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="all">
              <h3>Todos os projetos</h3>
              <div className="col-6">
                <a target="_blank" href="https://github.com/VictorBravim?tab=repositories"><button>Repositório
                  <i className='bx bxl-github'></i>
                </button></a>
                <div className="cubo">
                  <div className="faces">
                    <div className="face face1">
                      <img src={css} alt="" />
                    </div>
                    <div className="face face2">
                      <img src={html} alt="" />
                    </div>
                    <div className="face face3">
                      <img src={js} alt="" />
                    </div>
                    <div className="face face4">
                      <img src={ts} alt="" />
                    </div>
                    <div className="face face5">
                      <img src={react} alt="" />
                    </div>
                    <div className="face face6">
                      <img src={php} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Container-5 */}
        <div id="contato" className="container-5">
          <div className="colunas-5">
            <div className="texto-2">
              <h2>Contatos</h2>
              <span className="contatospan">
                <i className='bx bx-envelope'></i>
                Contact
              </span>
            </div>
            <div className="contatos">
              <div className="contacts">
                <h4>
                  <i className='bx bxl-whatsapp contac'></i>
                  WhatsApp
                </h4>
                <a target="_blank" href="https://api.whatsapp.com/send?phone=5512996839077">
                  <p>+55 12
                    99683-9077</p>
                </a>
              </div>
              <div className="contacts">
                <h4>
                  <i className='bx bx-envelope contac'></i>
                  Email
                </h4>
                <a target="_blank" href="mailto:victorbravimofc@gmail.com">
                  <p>victorbravimofc@gmail.com</p>
                </a>
              </div>
              <div className="contacts">
                <h4>
                  <i className='bx bx-current-location contac'></i>
                  Localização
                </h4>
                <a target="_blank" href="https://www.google.com/maps/place/Lorena,+SP/@-22.730
                        9981,-45.1114119,13z/data=!3m1!4b1!4m6!3m5!1s0x94ccc9201d468adf:0xc9ce9c4b4546
                        c622!8m2!3d-22.7348827!4d-45.1183782!16zL20vMDQxcDRi?entry=ttu">
                  <p>Lorena - SP</p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="fote">
          <h4> © 2023 <span>Victor Bravim</span></h4>
          <div className="links"><a target="_blank" aria-label="Link Github" href="https://github.com/VictorBravim">
            <i className='bx bxl-github'></i>
          </a>
            <a target="_blank" aria-label="Link Linkedin"
              href="https://www.linkedin.com/in/victor-bravim-4b6871275/">
              <i className='bx bxl-linkedin'></i>
            </a>
            <a target="_blank" aria-label="Link Instagram" href="https://www.instagram.com/victorbravim_/">
              <i className='bx bxl-instagram'></i>
            </a>
            <a target="_blank" aria-label="Link whatsapp" href="https://api.whatsapp.com/send?phone=5512996839077">
              <i className='bx bxl-whatsapp'></i>
            </a>
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;
