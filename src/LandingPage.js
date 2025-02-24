import React from 'react';
import './css/base.css';
import './css/header.css';
import './css/card.css';
import './css/navbar.css';
import './css/footer.css';
import './css/menu.css';

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
          <a href="#" className="text-decoration-none" onClick={() => changeFontSize('decrease')}>A-</a>
          <a href="#" className="text-decoration-none" onClick={() => changeFontSize('reset')}>A</a>
          <a href="#" className="text-decoration-none" onClick={() => changeFontSize('increase')}>A+</a>
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
            <h1 className="header-title text-center mx-auto position-absolute">Secretaria Municipal da Fazenda </h1>
            <div className="icon-container d-flex align-items-center">
              <a href="https://github.com/seu-perfil" target="_blank" className="text-white me-3">
                <i className="bi bi-whatsapp fa-lg"></i>
              </a>
              <a href="https://twitter.com/seu-perfil" target="_blank" className="text-white me-3">
                <i className="bi bi-instagram fa-lg"></i>
              </a>
              <a href="#" className="text-white me-3">
                <i className="bi bi-facebook fa-lg"></i>
              </a>
            </div>
          </div>
          <div className="location-date text-white text-end">
            <span>Riachão do Jacuipe - Bahia</span><br /> <span id="current-date"></span>
          </div>
        </div>
      </header>
    </>
  );
};

export default LandingPage;
