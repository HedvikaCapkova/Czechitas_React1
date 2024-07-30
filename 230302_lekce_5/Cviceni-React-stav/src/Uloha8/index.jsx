import React, { useState } from 'react';

// Zadání 1: Vytvoř stavovou proměnnou s výchozí hodnotou `'možná'`.
// Zadání 2: Proměnnou vypiš místo `ano/ne/možná`.
// Zadání 3: Po kliknutí na tlačítko změň `možná` na `ano`, `ano` na `ne`, případně `ne` na `možná`.

export const Uloha8 = () => {
  const [isRainy, setIsRainy] = useState('možná');
  const rain = () => {
    if (isRainy === 'možná') {
      setIsRainy('ano');
    } else if (isRainy === 'ano') {
      setIsRainy('ne');
    } else {
      setIsRainy('možná');
    }
  };

  return (
    <>
      <h3>Prší v Brně: {isRainy}</h3>
      <button onClick={rain}>změnit</button>
    </>
  );
};
