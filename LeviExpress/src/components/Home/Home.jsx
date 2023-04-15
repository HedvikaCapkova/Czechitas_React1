import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker/JourneyPicker';
import { JourneyDetail } from '../JourneyDetail/JourneyDetail';
import { SelectedSeat } from '../SelectedSeat/SelectedSeat';

export const Home = () => {
  const [journeyResult, setJourneyResult] = useState(null);

  const handleJourneyChange = (journey) => {
    setJourneyResult(journey);
  };

  const handleBuy = () => {
    console.log('funguju');
  };

  return (
    <>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journeyResult && <JourneyDetail journeyResult={journeyResult} />}
      {journeyResult && <SelectedSeat number={journeyResult} />}
      {journeyResult && (
        <div className="controls container">
          <button
            className="btn btn--big"
            type="button"
            onClick={handleBuy}>
            Rezervovat
          </button>
        </div>
      )}
    </>
  );
};
