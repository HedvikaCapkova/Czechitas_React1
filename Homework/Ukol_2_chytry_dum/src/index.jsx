import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import smartHomeData from './smartHomeData.js';
import { Header } from './Header/Header.jsx';
import { Dashboard } from './Dashboard/Dashboard.jsx';

const App = () => {
  return (
    <div className="container">
      <Header title="Chytrý dům" />
      <Dashboard data={smartHomeData} />
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
