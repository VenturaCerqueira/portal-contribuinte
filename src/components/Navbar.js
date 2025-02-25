import React from 'react';
import '../css/navbar.css'; 

const Navbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-xl custom-navbar">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item"><a className="nav-link" href="/"><i className="fas fa-home"></i> Início</a></li>
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-user"></i> Contribuinte
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/emissao-cnd"><i className="fas fa-file-alt"></i> Emissão de CND</a></li>
                  <li><a className="dropdown-item" href="/validacao-cnd"><i className="fas fa-check-circle"></i> Validação CND</a></li>
                  <li><a className="dropdown-item" href="/segunda-via-certidao"><i className="fas fa-check-circle"></i> 2° Via Certidão de baixa de atividade</a></li>
                  <li><a className="dropdown-item" href="/consultar-autenticidade"><i className="fas fa-search"></i> Consultar autenticidade certidão baixa de atividade</a></li>
                  <li><a className="dropdown-item" href="/declaracao-nao-inscrito"><i className="fas fa-file-invoice-dollar"></i> Declaração de não inscrito</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-building"></i> Mobiliário
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/segunda-via-tff"><i className="fas fa-file-alt"></i> 2° Via TFF</a></li>
                  <li><a className="dropdown-item" href="/segunda-via-iss"><i className="fas fa-check-circle"></i> 2° Via ISS</a></li>
                  <li><a className="dropdown-item" href="/emissao-cnd-mobiliario"><i className="fas fa-file-alt"></i> Emissão de CND</a></li>
                  <li><a className="dropdown-item" href="/validacao-cnd-mobiliario"><i className="fas fa-check-circle"></i> Validação CND</a></li>
                  <li><a className="dropdown-item" href="/cartao-cga"><i className="fas fa-search"></i> Cartão CGA</a></li>
                  <li><a className="dropdown-item" href="/consultar-autenticidade-alvara"><i className="fas fa-file-invoice-dollar"></i> Consultar autenticidade de alvara</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-home"></i> Imobiliário
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/segunda-via-iptu"><i className="fas fa-file-alt"></i> 2° Via IPTU</a></li>
                  <li><a className="dropdown-item" href="/segunda-via-itiv"><i className="fas fa-check-circle"></i> 2° Via ITIV</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-folder"></i> Protocolo
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/sistema-protocolo"><i className="fas fa-file-invoice-dollar"></i> Acesse sistema de protocolo</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <button className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-receipt"></i> NFS-e
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/sistema-nfse"><i className="fas fa-file-invoice-dollar"></i> Acesse sistema de NFS-e</a></li>
                  <li><a className="dropdown-item" href="/consultar-autenticidade-nfse"><i className="fas fa-file-invoice-dollar"></i> Consultar autenticidade de NFS-e</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Botão Fixo "Acessar" */}
      <div className="fixed-button" id="fixedButton">
        <i className="fas fa-sign-in-alt"></i>
        <span className="button-text">e-contrib</span>
      </div>
    </>
  );
};

export default Navbar;