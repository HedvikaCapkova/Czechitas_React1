import React from 'react';
import { Light } from '../Light/Light';
import './Lights.css';

export const Lights = ({ lights }) => {
  return (
    <div className="lights">
      {lights.map((light) => (
        <Light
          key={light.name}
          light={light}
        />
      ))}
    </div>
  );
};
