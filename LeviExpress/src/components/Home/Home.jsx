import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker/JourneyPicker';

export const Home = () => {
  const [journeyResult, setJourneyResult] = useState(null);

  const handleJourneyChange = (journey) => {
    console.log(journey);
    setJourneyResult(journey.journeyId);
  };

  return (
    <>
      <main>
        <JourneyPicker onJourneyChange={handleJourneyChange} />
      </main>
      {journeyResult && <p>Nalezeno spojení s id {journeyResult}</p>}
    </>
  );
};
