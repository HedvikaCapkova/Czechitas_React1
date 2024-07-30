import React, {useState} from 'react';
import './style.css';

const Sourozenec2 = ({zprava}) => {

	return (
		<div className="sourozenec2">
			<h3>Ségra</h3>
			{
				zprava === null
				? <p>zadna zprava</p>
				: <p>{zprava}</p>
			}
		</div>
	)
}

export default Sourozenec2;
