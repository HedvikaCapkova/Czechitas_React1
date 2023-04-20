import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const App = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [terms, setTerms] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    console.log(email, password, terms);
    e.preventDefault();
    fetch('https://random.kodim.app/api/register?act=shaky', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        acceptTerms: terms,
      }),
    })
      .then((resp) => {
        console.log(resp.status);
        if (resp.status === 200) {
          return resp.json();
        }

        if (resp.status === 500) {
          setErrorMessage('Chyba 500');
        }

        if (resp.status === 400) {
          setErrorMessage('Chyba 400');
        }

        if (resp.status === 503) {
          setErrorMessage('Chyba 503');
        }
      })
      .catch((error) => {
        console.error('Chyba komunikace se serverem:', error.message);
        setErrorMessage('Chyba komunikace se serverem');
      });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <input
          value={email}
          type="email"
          placeholder="e-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          value={password}
          type="password"
          placeholder="heslo"
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label>
          <input
            type="checkbox"
            value={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />
          <span>Souhlas s obchodními podmínkami</span>
        </label>
        <br />
        <button type="submit">Registrovat</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
