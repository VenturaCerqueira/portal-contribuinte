import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './LandingPage'; 
import Card from './components/Card'; 
import './css/navbar.css'; 

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Navbar />
      <Card /> 
    </div>
  );
}

export default App;
