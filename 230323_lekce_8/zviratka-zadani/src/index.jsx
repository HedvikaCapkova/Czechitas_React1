import React from 'react';
import { createRoot } from 'react-dom/client';
import { AnimalDetail } from './AnimalDetail/AnimalDetail';
import { AnimalList } from './AnimalList/AnimalList';
import './style.css';

const App = () => {
  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">
        <AnimalList />
        <AnimalDetail />
        {/* zde budou jednotlivé komponenty */}
      </div>
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
