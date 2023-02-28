import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const Bulb = ({on}) => {
    return (
  <>
    <div id="app" className="container">
    { on ? <div className="bulb--on"></div> : <div className="bulb"></div>}
    </div>
  </>
  );
};

  // const container = document.querySelector('.container');
  // container.onclick = ({on}) => {
  //   on = true;
  // };

createRoot(
  document.querySelector('#app'),
).render(<Bulb />);




// const valid = password.length > 8? "Heslo je v pořádku" : "Heslo není bezpečné"