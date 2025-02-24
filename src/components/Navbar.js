import React from 'react';
import '../css/navbar.css'; // Corrected the path to navbar.css

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
              <li className="nav-item"><a className="nav-link" href="#"><i className="fas fa-home"></i> Início</a></li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-user"></i> Contribuinte
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#"><i className="fas fa-file-alt"></i> Emissão de CND</a></li>
                  <li><a className="dropdown-item" href="#"><i className="fas fa-check-circle"></i> Validação CND</a></li>
                  <li><a className="dropdown-item" href="#"><i className="fas fa-check-circle"></i> 2° Via Certidão de baixa de atividade</a></li>
                  <li><a className="dropdown-item" href="#"><i className="fas fa-search"></i> Consultar autenticidade certidão baixa de atividade</a></li>
                  <li><a className="dropdown-item" href="#"><i className="fas fa-file-invoice-dollar"></i>Declaração de não inscrito</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-building"></i> Mobiliário
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#"><i className="fas fa-file-alt"></i> 2° Via TFF</a></li>
                  <li><a className="dropdown-item" href="#"><i className="fas fa-check-circle"></i> 2° Via ISS</a></li>
                  <li><a className="dropdown-item" href="#"><i className="fas fa-file-alt"></i> Emissão de CND</a></li>
                  <li><a className="dropdown-item" href="#"><i className="fas fa-check-circle"></i> Validação CND</a></li>
                  <li><a className="dropdown-item" href="#"><i className="fas fa-search"></i> Cartão CGA</a></li>
                  <li><a className="dropdown-item" href="#"><i className="fas fa-file-invoice-dollar"></i>Consultar autenticidade de alvara</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-home"></i> Imobiliário
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#"><i className="fas fa-file-alt"></i> 2° Via IPTU</a></li>
                  <li><a className="dropdown-item" href="#"><i className="fas fa-check-circle"></i> 2° Via ITIV</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-folder"></i> Protocolo
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#"><i className="fas fa-file-invoice-dollar"></i> Acesse sistema de protocolo</a></li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fas fa-receipt"></i> NFS-e
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#"><i className="fas fa-file-invoice-dollar"></i> Acesse sistema de NFS-e</a></li>
                  <li><a className="dropdown-item" href="#"><i className="fas fa-file-invoice-dollar"></i>Consultar autenticidade de NFS-e</a></li>
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