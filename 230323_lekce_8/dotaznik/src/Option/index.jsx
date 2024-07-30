import React from 'react';
import Icon from '../Icon/index';
import './style.css';

const Option = ({ type, text, onSelected }) => {
  const handleClick = () => {
    onSelected(type);
  };
  return (
    <div
      className="option"
      onClick={handleClick}>
      <Icon type={type} />
      <div>{text}</div>
    </div>
  );
};

export default Option;
