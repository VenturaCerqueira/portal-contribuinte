import React, { useEffect, useState } from 'react';
import '../css/card.css'; 
import image1 from './img/10075621.jpg';
import image2 from './img/7176685.jpg';

const Card = () => {
  const [currentImage, setCurrentImage] = useState(image1);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentImage(prevImage => (prevImage === image1 ? image2 : image1));
        setFade(false);
      }, 1000); // Match the duration of the CSS transition
    }, 30000); // 30000 milliseconds = 30 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="card-container">
      {/* Text Card */}
      <div className="container col-xxl-8 px-4 py-1">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-1">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={currentImage}
              className={`d-block mx-lg-auto img-fluid card-img ${fade ? 'fade-out' : ''}`}
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6 text-center text-lg-start">
          <h1 class="display-5 fw-bold text-body-emphasis lh-1 mb-3" >Portal do Contribuinte</h1>
            <p className="lead">Bem-vindo ao Portal do Contribuinte!</p>
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