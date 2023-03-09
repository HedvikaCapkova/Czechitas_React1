import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {
  const [date, setDate] = useState('2020-11-13T22:46');
  const [timezone, setTimezone] = useState('Europe/Prague');

  useEffect(() => {
    fetch(`https://worldtimeapi.org/api/timezone/${timezone}`)
      .then((response) => response.json())
      .then((data) => setDate(data.datetime));
  }, [timezone]);

  return (
    <section>
      <div className="container">{`Hodnota datetime: ${date}`}</div>
      <select
        value={timezone}
        onChange={(e) => setTimezone(e.target.value)}>
        <option value="America/New_York">New York</option>
        <option value="Europe/London">Londýn</option>
        <option value="Europe/Moscow">Moskva</option>
        <option value="Europe/Prague">Praha</option>
        <option value="Asia/Hong_Kong">Hong Kong</option>
        <option value="Asia/Jerusalem">Jeruzalém</option>
      </select>
    </section>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
