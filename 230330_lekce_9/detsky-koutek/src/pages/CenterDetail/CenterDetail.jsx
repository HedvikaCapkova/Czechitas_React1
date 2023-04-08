import React from 'react';
import { getCenterById } from '../../centers';
import { useParams } from 'react-router-dom';

export const CenterDetail = () => {
  const { id } = useParams();
  const centerId = getCenterById(id);
  const openingHours = centerId.open;

  const openingHoursList = Object.entries(openingHours).map(
    ([dayOfWeek, hours]) => (
      <li key={dayOfWeek}>
        {dayOfWeek}: {hours ?? 'Closed'}
      </li>
    )
  );

  return (
    <div className="centerDetail">
      <div>Adresa: {centerId.address} </div>
      <div>Kapacita: {centerId.capacity}</div>
      <div>
        Otevírací doba: <ul>{openingHoursList}</ul>
      </div>
      <div>Info: {centerId.info}</div>
    </div>
  );
};
