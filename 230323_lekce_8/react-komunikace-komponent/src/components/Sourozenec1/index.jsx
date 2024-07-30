import React, {useState} from 'react';
import './style.css';

const Sourozenec1 = ({onVzkaz}) => {

	const handleClick = () => {
		onVzkaz('Jitko, smrdíš!');
	}

	return (
		<div className="sourozenec1">
			<h3>Brácha</h3>
			<button onClick={handleClick}>Řekni ségře, že smrdí</button>
		</div>
	)
}

export default Sourozenec1;
