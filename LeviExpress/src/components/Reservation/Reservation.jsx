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
            <p>{reservation.results.date}</p>
            <p>
              {reservation.results.fromCity.name},{' '}
              {reservation.results.fromCity.time}
            </p>
            <p>
              {reservation.results.toCity.name},{' '}
              {reservation.results.toCity.time}
            </p>
            <p>{reservation.results.seatNumber}</p>
          </div>
        </div>
      </div>
    );
  }
};
