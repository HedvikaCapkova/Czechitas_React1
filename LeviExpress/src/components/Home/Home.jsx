import React, { useState } from 'react';
import { JourneyPicker } from '../JourneyPicker/JourneyPicker';
import { JourneyDetail } from '../JourneyDetail/JourneyDetail';
import { SeatPicker } from '../SeatPicker/SeatPicker';
import { useNavigate } from 'react-router-dom';

export const Home = () => {
  const navigate = useNavigate();

  const [journeyResult, setJourneyResult] = useState(null);

  const handleJourneyChange = (journey) => {
    setJourneyResult(journey);
  };

  const handleBuy = () => {
    fetch('https://apps.kodim.cz/daweb/leviexpress/api/reservation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        action: 'create',
        seat: journeyResult.autoSeat,
        journeyId: journeyResult.journeyId,
      }),
    })
      .then((response) => response.json())
      .then((data) => navigate(`/reservation/${data.results.reservationId}`));
  };

  return (
    <>
      <JourneyPicker onJourneyChange={handleJourneyChange} />
      {journeyResult && <JourneyDetail journeyResult={journeyResult} />}
      {journeyResult && <SeatPicker number={journeyResult} />}
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
