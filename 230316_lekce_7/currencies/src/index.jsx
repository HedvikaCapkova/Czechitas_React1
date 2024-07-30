import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import Rate from './components/Rate';
import './style.css';

const App = () => {
  const [currency, setCurrency] = useState('USD');
  const [conversionRate, setConversionRate] = useState(null);

  const handleCurrencyChange = (e) => {
    setCurrency(e.target.value);
  };

  useEffect(() => {
    fetch(`https://api.frankfurter.app/latest?from=${currency}&to=CZK`)
      .then((response) => response.json())
      .then((data) => setConversionRate(data.rates.CZK));
  }, [currency]);

  return (
    <div className="container">
      <h1>Kurzovní lístek</h1>
      <div className="currency-info">
        <form>
          <div className="form-field">
            <label htmlFor="currency-select">Měna:</label>
            <select
              id="currency-select"
              value={currency}
              onChange={handleCurrencyChange}>
              <option value="USD">Americký dolar</option>
              <option value="EUR">Euro</option>
              <option value="GBP">Britská libra</option>
            </select>
          </div>
        </form>
        <Rate
          from={currency}
          rate={conversionRate}
        />
      </div>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
