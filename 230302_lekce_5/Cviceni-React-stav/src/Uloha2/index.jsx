import React, { useState } from 'react'

// Zadání 1: Převeď `cislo` na stavovou proměnnou.
// Zadání 2: Nastav, aby jednotlivá tlačítka měnila stav. +1 přičítalo jedničku, +5 přičítalo pětku, vynulovat nastavovalo na nulu apod.

const Pocitadlo = () => {
	const [cislo, setcislo] = useState(0)

	return (
		<>
			<h3>Počítadlo: {cislo}</h3>
			<button onClick={() => setcislo(cislo-5)}>-5</button>
			<button onClick={() => setcislo(cislo-1)}>-1</button>
			<button onClick={() => setcislo(0)}>vynulovat</button>
			<button onClick={() => setcislo(cislo+1)}>+1</button>
			<button onClick={() => setcislo(cislo+5)}>+5</button>
		</>
	)
}

export const Uloha2 = () => {
	return (
		<>
			<Pocitadlo />
			<Pocitadlo />
		</>
	)
}
