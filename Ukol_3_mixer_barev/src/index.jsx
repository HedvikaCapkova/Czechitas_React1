import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ColorSlider } from './ColorSlider/ColorSlider';
import './style.css';

const App = () => {
  const [redValue, setRedValue] = useState(0);
  const [greenValue, setGreenValue] = useState(0);
  const [blueValue, setBlueValue] = useState(0);

  return (
    <div className="color-panel">
      <h1>Mixér barev</h1>
      <div className="sliders">
        <ColorSlider
          baseColor="red"
          colorName="Červená"
          value={redValue}
          onValueChange={setRedValue}
        />
        <ColorSlider
          baseColor="green"
          colorName="Zelená"
          value={greenValue}
          onValueChange={setGreenValue}
        />
        <ColorSlider
          baseColor="blue"
          colorName="Modná"
          value={blueValue}
          onValueChange={setBlueValue}
        />
        <div
          className="color-box"
          id="color-box"
          style={{
            backgroundColor: `rgb(${redValue}, ${greenValue}, ${blueValue})`,
          }}></div>
      </div>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
