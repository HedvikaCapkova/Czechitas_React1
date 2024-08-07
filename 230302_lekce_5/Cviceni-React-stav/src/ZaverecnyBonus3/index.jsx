import React, { useState } from 'react';
import { useCasVSekundach } from './hodiny';

// Zadání: Pomocí předchystané stavové proměnné, která se mění každou sekundu, zobraz aktuální čas ve formátu 7:49:05.

// Nápověda: Pokud je v `casVSekundach` nula, pak je 0:00:00. Pokud je v `casVSekundach` 60, pak je 0:01:00. Pokud je v `casVSekundach` 67, pak je 0:01:07.

export const ZaverecnyBonus3 = () => {
  const casVSekundach = useCasVSekundach();

  let hours = Math.floor(casVSekundach / (60 * 60));
  let minutes = Math.floor((casVSekundach % (60 * 60)) / 60)
    .toString()
    .padStart(2, 0);
  let seconds = Math.ceil((casVSekundach % (60 * 60)) % 60)
    .toString()
    .padStart(2, 0);

  return (
    <>
      Čas právě teď: <b>{`${hours}:${minutes}:${seconds}`}</b>
    </>
  );
};
