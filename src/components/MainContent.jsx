// src/components/MainContent.jsx

import React, { useState, useEffect } from 'react';

const MainContent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(apiData => {
        setData(apiData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener datos:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main>
        <h2>Cargando contenido...</h2>
      </main>
    );
  }

  return (
    <main>
      <h2>Contenido obtenido de una API</h2>
      <ul>
        {data.map(item => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MainContent;