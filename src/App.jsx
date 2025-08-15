// src/App.jsx

import React from 'react';
import Header from './components/Header.jsx';
import MainContent from './components/MainContent.jsx';
import Footer from './components/Footer.jsx'; // Importas el nuevo componente Footer

const App = () => {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer /> {/* Usas el nuevo componente Footer */}
    </div>
  );
};

export default App;