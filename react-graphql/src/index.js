import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './custom.scss';

ReactDOM.render(
	//Spits out the app
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
);
