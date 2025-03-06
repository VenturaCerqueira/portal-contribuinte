import React from 'react';
import { Link } from 'react-router-dom';
import './css/base.css';
import './css/header.css';
import './css/card.css';
import './css/navbar.css';
import './css/footer.css';
import './css/menu.css';
import './css/fixedButton.css'; 

const LandingPage = () => {
  const changeFontSize = (action) => {
    const body = document.body;
    let currentSize = parseFloat(window.getComputedStyle(body).fontSize);

    if (action === 'increase') {
      body.style.fontSize = (currentSize + 1) + 'px';
    } else if (action === 'decrease') {
      body.style.fontSize = (currentSize - 1) + 'px';
    } else if (action === 'reset') {
      body.style.fontSize = '';
    }
  };

  return (
    <>
      <div className="top-accessibility-bar py-1 px-3">
        <div className="container d-flex justify-content-start align-items-center gap-4">
          <span className="fw-bold">ACESSIBILIDADE</span>
          <a href="https://twitter.com/seu-perfil" className="text-decoration-none" onClick={() => changeFontSize('decrease')}>A-</a>
          <a href="https://twitter.com/seu-perfil" className="text-decoration-none" onClick={() => changeFontSize('reset')}>A</a>
          <a href="https://twitter.com/seu-perfil" className="text-decoration-none" onClick={() => changeFontSize('increase')}>A+</a>
          <span className="mx-2">|</span>
          <a href="https://www.riachaodojacuipe.ba.gov.br/acessoainformacao/" className="text-decoration-none">
            <i className="fas fa-info-circle"></i> ACESSO À INFORMAÇÃO
          </a>
        </div>
      </div>
      <header className="px-3 py-1 custom-header border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-between position-relative">
            <a href="https://www.riachaodojacuipe.ba.gov.br/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
              <img src="/src/img/icons/logo.png" className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="220" />
            </a>
            <div className="secretaria-nome">Secretaria Municipal da Fazenda</div>
            <div className="icon-container d-flex align-items-center">
              <a href="https://github.com/seu-perfil" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="bi bi-whatsapp fa-lg"></i>
              </a>
              <a href="https://twitter.com/seu-perfil" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="bi bi-instagram fa-lg"></i>
              </a>
              <a href="https://twitter.com/seu-perfil" target="_blank" rel="noopener noreferrer" className="text-white me-3">
                <i className="bi bi-facebook fa-lg"></i>
              </a>
            </div>
          </div>
          <div className="location-date text-white text-end">
            <span>Riachão do Jacuipe - Bahia</span><br /> <span id="current-date"></span>
          </div>
        </div>
      </header>

      <div className="fixed-button" id="fixedButton">
        <i className="fas fa-sign-in-alt"></i>
        <span className="button-text">e-contrib</span>
      </div>

      <div className="fixed-button-nfse" id="fixedButtonNfse">
        <i className="fas fa-file-invoice-dollar"></i>
        <span className="button-text">NFS-e</span>
      </div>

      <div className="fixed-button-protocolo" id="fixedButtonProtocolo">
        <i className="fas fa-file-alt"></i>
        <span className="button-text">Protocolo</span>
      </div>

      <div className="menu">
        <ul>
          <li><Link to="/emissao-cnd">EMISSÃO DE CND</Link></li>
          <li><Link to="/validacao-cnd">VALIDAÇÃO CND</Link></li>
          <li><Link to="/segunda-via-certidao">2ª VIA CERTIDÃO DE BAIXA DE ATIVIDADE</Link></li>
          <li><Link to="/consultar-autenticidade">CONSULTAR AUTENTICIDADE CERTIDÃO BAIXA DE ATIVIDADE</Link></li>
          <li><Link to="/declaracao-nao-inscrito">DECLARAÇÃO DE NÃO INSCRITO</Link></li>
        </ul>
      </div>
    </>
  );
};

export default LandingPage;