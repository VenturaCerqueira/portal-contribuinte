import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './css/navbar.css'; 
import LandingPage from './components/LandingPage';
import EmissaoCND from './components/CND/EmissaoCND';
import ValidacaoCND from './components/CND/ValidacaoCND';
import SegundaViaCertidao from './components/CND/SegundaViaCertidao';
import ConsultarAutenticidade from './components/CND/ConsultarAutenticidade';
import DeclaracaoNaoInscrito from './components/CND/DeclaracaoNaoInscrito';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/emissao-cnd" component={EmissaoCND} />
      <Route path="/validacao-cnd" component={ValidacaoCND} />
      <Route path="/segunda-via-certidao" component={SegundaViaCertidao} />
      <Route path="/consultar-autenticidade" component={ConsultarAutenticidade} />
      <Route path="/declaracao-nao-inscrito" component={DeclaracaoNaoInscrito} />
    </Switch>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();