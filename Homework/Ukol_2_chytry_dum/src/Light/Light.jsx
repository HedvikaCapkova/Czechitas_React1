import React, { useState } from 'react';
import lightOff from './light-off.svg';
import lightOn from './light-on.svg';
import './Light.css';

export const Light = ({ light }) => {
  const { name, state } = light;
  const [lightState, setLightState] = useState(state);

  return (
    <div
      className="light"
      onClick={() => setLightState(lightState === 'on' ? 'off' : 'on')}>
      <div className="light__icon">
        <img
          src={lightState === 'on' ? lightOn : lightOff}
          alt={lightState === 'on' ? 'light-on' : 'light-off'}
        />
      </div>
      <div className="light__name">{name}</div>
    </div>
  );
};
