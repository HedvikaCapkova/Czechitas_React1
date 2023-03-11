import React, { useState } from 'react';

// Zadání: Pomocí dvou stavových proměnných s výchozí hodnotou 0, které se budou měnit podle vstupních políček, vypiš do `<output></output>` jejich součet.

export const ZaverecnyBonus4 = () => {
  const [firstInput, setFirstInput] = useState(0);
  const [secondInput, setSecondInput] = useState(0);
  return (
    <>
      <input
        type="number"
        value={firstInput}
        onChange={(e) => setFirstInput(e.target.value)}
      />{' '}
      +{' '}
      <input
        type="number"
        value={secondInput}
        onChange={(e) => setSecondInput(e.target.value)}
      />{' '}
      = <output>{Number(firstInput) + Number(secondInput)}</output>
    </>
  );
};
