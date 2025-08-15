// src/components/MainContent.jsx
import React from 'react';

const MainContent = () => {
  const services = [
    { id: 1, title: 'Diseño Web', description: 'Creamos sitios web modernos y responsive.' },
    { id: 2, title: 'Desarrollo de Apps', description: 'Construimos aplicaciones móviles a medida.' },
    { id: 3, title: 'Marketing Digital', description: 'Estrategias para impulsar tu presencia online.' }
  ];

  return (
    <main>
      <h2>Nuestros Servicios</h2>
      <div>
        {services.map(service => (
          <div key={service.id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default MainContent;