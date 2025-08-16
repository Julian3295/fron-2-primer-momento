// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import App from './App.jsx';
import './index.css';

import ServicesPage from './pages/ServicesPage.jsx'; // Importas la nueva página

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/servicios',
    element: <ServicesPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);