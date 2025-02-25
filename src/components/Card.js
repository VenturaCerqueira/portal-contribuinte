import React from 'react';
import '../css/card.css'; 
const Card = () => {
  return (
    <div className="card-container">
      {/* Text Card */}
      <div className="container col-xxl-8 px-4 py-1">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-1">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src="/img/backgrounds/10075621.jpg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">Portal do Contribuinte</h1>
            <p className="lead">Bem-vindo ao Portal do Contribuinte</p>
            <p className="lead">
              Aqui você encontra praticidade e segurança para acessar seus serviços tributários de forma rápida e eficiente.<br />
              Consulte débitos, emita guias, regularize sua situação fiscal e muito mais, tudo em um só lugar.<br />
              Estamos à disposição para facilitar sua experiência. Acesse e aproveite os serviços do e-Contrib!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;