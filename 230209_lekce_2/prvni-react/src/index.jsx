import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const className = "intro";

const appContent = (
  <div className="container">
    <header>
      <h1>Hedvika Čapková</h1>
    </header>
    <main>
      <p className={ className }>Moje první React aplikace</p>
    </main>
  </div>
);
  
createRoot(document.querySelector('#app')).render(appContent);