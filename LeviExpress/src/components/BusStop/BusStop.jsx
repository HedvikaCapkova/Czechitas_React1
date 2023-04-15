import React from 'react';
import './BusStop.css';

export const BusStop = (stop) => {
  return (
    <div className="bus-stop">
      <div className="bus-stop__bullet"></div>
      <div className="bus-stop__place">
        <div className="bus-stop__city">{stop.stop.name}</div>
        <div className="bus-stop__station">{stop.stop.station}</div>
      </div>
      <div className="bus-stop__departure">{stop.stop.time}</div>
    </div>
  );
};
