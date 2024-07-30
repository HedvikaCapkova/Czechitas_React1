import React from 'react';
import './SchemeColor.css';

export const SchemeColor = ({ color }) => {
  return (
    <div
      className="scheme-color"
      style={{ backgroundColor: `${color}` }}>
      {color}
    </div>
  );
};
