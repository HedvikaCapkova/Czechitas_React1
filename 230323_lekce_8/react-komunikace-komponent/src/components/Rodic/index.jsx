import React, {useState} from 'react';
import './style.css';

import Dite from './../Dite';
import Sourozenec1 from './../Sourozenec1';
import Sourozenec2 from './../Sourozenec2';

const Rodic = () => {

	const [zprava, setZprava] = useState(null);

	const predejVzkaz = (vzkaz) => {
		setZprava(vzkaz)
	}

	return (
		<div className="rodic">
			<h3>Rodič</h3>

			<Sourozenec1 onVzkaz={predejVzkaz}/>
			<Sourozenec2 zprava={zprava} />

		</div>
	)
}

export default Rodic;
