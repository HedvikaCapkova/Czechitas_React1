import React, { useState } from 'react';
import tempImg from './temp.svg';
import './Climate.css';

export const Climate = ({ climate }) => {
  const { temperature, humidity } = climate;
  const [temp, setTemp] = useState(temperature);
  return (
    <div className="climate">
      <div className="climate__icon">
        <img src={tempImg} />
      </div>
      <div className="climate__content">
        <div className="climate__temperature">{temp}&deg;C</div>
        <div className="climate__humidity">
          Vlhost vzduchu {humidity}&nbsp;%
        </div>
      </div>
      <div className="climate__controls">
        <button
          onClick={() => setTemp(temp + 1)}
          className="button">
          +
        </button>
        <button
          onClick={() => setTemp(temp - 1)}
          className="button">
          -
        </button>
      </div>
    </div>
  );
};
