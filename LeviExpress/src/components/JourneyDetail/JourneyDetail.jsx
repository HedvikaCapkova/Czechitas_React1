import React from 'react';
import { BusStop } from '../BusStop/BusStop';
import './JourneyDetail.css';

export const JourneyDetail = (stops) => {
  console.log(stops);
  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {/* {stops.map((stop) => (
          <BusStop stop={stop} />
        ))} */}
      </div>
    </div>
  );
};
