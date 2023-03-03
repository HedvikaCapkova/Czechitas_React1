import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const cities = [
  'Praha',
  'Brno',
  'Ostrava',
  'Plzeň',
  'Liberec',
  'Olomouc',
  'České Budějovice',
  'Hradec Králové',
  'Ústí nad Labem',
  'Pardubice',
];

const App = () => {
  return (
    <>

  {cities.map((city) => {
    return (
      <>
      <div className="city">{city}</div>
      </>
    )
  })}  
  </> 
  );  
};

createRoot(
  document.querySelector('#app'),
).render(<App />);
