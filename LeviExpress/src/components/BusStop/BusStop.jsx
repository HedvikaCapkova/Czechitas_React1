import React from 'react';

export const BusStop = (stop) => {
  const name = 'Praha';
  const station = 'ÚAN Florenc';
  const time = '15:55';
  return (
    <div className="bus-stop">
      <div className="bus-stop__bullet"></div>
      <div className="bus-stop__place">
        <div className="bus-stop__city">{stop.name}</div>
        <div className="bus-stop__station">{stop.station}</div>
      </div>
      <div className="bus-stop__departure">{stop.time}</div>
    </div>
  );
};
