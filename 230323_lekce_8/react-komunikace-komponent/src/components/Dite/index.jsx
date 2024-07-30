import React, {useState} from 'react';
import './style.css';

const Dite = ({jmeno, onKruceniVBrise}) => {

	const handleClick = () => {
		console.log('mam hlad');
		onKruceniVBrise(jmeno, 'hlad');
	}

	return (
		<div className="dite">
			<h3>Dítě: {jmeno}</h3>
			<button onClick={handleClick}>Mám hlad</button>
			<button onClick={handleClick}>Mám žízeň</button>
		</div>
	)
}

export default Dite;
