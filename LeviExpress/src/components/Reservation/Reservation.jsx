import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Reservation.css';

export const Reservation = () => {
  let { id } = useParams();
  const [reservation, setReservation] = useState(null);

  useEffect(() => {
    fetch(`https://apps.kodim.cz/daweb/leviexpress/api/reservation?id=${id}`)
      .then((response) => response.json())
      .then((data) => setReservation(data));
  }, []);

  if (reservation) {
    const { date, fromCity, toCity, seatNumber } = reservation.results;
    return (
      <div className="reservation container">
        <h2>Vaše e-jízdenka č. {id}</h2>

        <div className="reservation__body">
          <div className="reservation__headings">
            <p>Datum cesty:</p>
            <p>Odjezd:</p>
            <p>Příjezd:</p>
            <p>Sedadlo:</p>
          </div>

          <div className="reservation__info">
            <p>{date}</p>
            <p>
              {fromCity.name}, {fromCity.time}
            </p>
            <p>
              {toCity.name}, {toCity.time}
            </p>
            <p>{seatNumber}</p>
          </div>
        </div>
      </div>
    );
  }
};
