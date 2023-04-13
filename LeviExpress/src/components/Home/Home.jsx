import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker/JourneyPicker';
import { JourneyDetail } from '../JourneyDetail/JourneyDetail';
import { API_BASE_URL } from './../../index';

export const Home = () => {
  const [journeyResult, setJourneyResult] = useState(null);

  const handleJourneyChange = (journey) => {
    setJourneyResult(journey);
  };

  return (
    <>
      <main>
        <JourneyPicker onJourneyChange={handleJourneyChange} />
      </main>
      {journeyResult && <JourneyDetail stops={journeyResult.stops} />}
    </>
  );
};
