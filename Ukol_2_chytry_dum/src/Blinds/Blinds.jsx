import React, { useState } from 'react';
import blindsOpen from './blinds-open.svg';
import blindsClosed from './blinds-closed.svg';
import './Blinds.css';

export const Blinds = ({ blinds }) => {
  const [blindsState, setBlindsState] = useState(blinds);
  return (
    <div className="blinds">
      <div className="blinds__icon">
        <img src={blindsState === 'open' ? blindsOpen : blindsClosed} />
      </div>
      <div className="blinds__name">Žaluzie</div>
      <div className="blinds__controls">
        <button
          onClick={() => setBlindsState('open')}
          className={`button ${
            blindsState === 'open' ? 'button--active' : ''
          }`}>
          Otevřeno
        </button>
        <button
          onClick={() => setBlindsState('closed')}
          className={`button ${
            blindsState === 'closed' ? 'button--active' : ''
          }`}>
          Zavřeno
        </button>
      </div>
    </div>
  );
};
