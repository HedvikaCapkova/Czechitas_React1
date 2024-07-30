import React from 'react';
import { BusStop } from '../BusStop/BusStop';
import './JourneyDetail.css';

export const JourneyDetail = (journeyResult) => {
  return (
    <div className="journey-detail container">
      <h2>Podrobnosti cesty</h2>
      <div className="stops">
        {journeyResult.journeyResult.stops.map((stop) => (
          <BusStop
            key={stop.code}
            stop={stop}
          />
        ))}
      </div>
    </div>
  );
};
