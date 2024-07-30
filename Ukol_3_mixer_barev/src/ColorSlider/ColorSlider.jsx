import React, { useRef } from 'react';
import './ColorSlider.css';

export const ColorSlider = ({ baseColor, colorName, onValueChange, value }) => {
  const element = useRef(null);
  const handleValueChange = () => {
    onValueChange(element?.current.value);
  };
  return (
    <>
      <label htmlFor={baseColor}>{colorName}</label>
      <input
        type="range"
        className={`slider slider--${baseColor}`}
        id={`${baseColor}Slider`}
        min="0"
        max="255"
        ref={element}
        value={value}
        onChange={handleValueChange}
      />
    </>
  );
};
