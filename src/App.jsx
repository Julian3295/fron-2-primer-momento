// src/App.jsx

import React from 'react';
import Header from './components/Header.jsx'; // Importas tu nuevo componente

const App = () => {
  return (
    <div>
      <Header />
      <main>
        {/* Aquí irá el contenido principal */}
        <h2>Bienvenido</h2>
      </main>
      <footer>
        <p>&copy; 2025 Mi Proyecto</p>
      </footer>
    </div>
  );
};

export default App;