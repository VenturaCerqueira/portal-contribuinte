import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './LandingPage'; // Assuming you have a LandingPage component
import Card from './components/Card'; // Import the Card component

function App() {
  return (
    <div className="App">
      <LandingPage />
      <Navbar />
      <Card /> {/* Add the Card component */}
      {/* Add other components or functions here as needed */}
    </div>
  );
}

export default App;
