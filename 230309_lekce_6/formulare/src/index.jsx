import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {
  const [userName, setUserName] = useState('');
  const [country, setCountry] = useState('Česká republika');

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Uživatel ${userName} ze země ${country} se chce zaregistrovat.`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      onChange={(e) => console.log(e.target.value)}>
      <label>
        Uživatelské jméno:
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </label>

      <label>
        <input type="checkbox" />
        Chci pravidelně dostávat novinky do mé e-mailové schránky.
      </label>

      <label>
        Země původu:
        <select
          value={country}
          onChange={(e) => setCountry(e.target.value)}>
          <option value="Chorvatsko">Chorvatsko</option>
          <option value="Česká republika">Česká republika</option>
          <option value="Polsko">Polsko</option>
          <option value="Slovenská republika">Slovenská republika</option>
        </select>
      </label>

      <button
        disabled={userName === ''}
        type="submit">
        Registrovat
      </button>
      {userName === '' && <div>Uživatelské jméno je povinný údaj</div>}
    </form>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
