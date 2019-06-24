import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import BugTracker from './bugTracker'
import appStore from './store';
import Spinner from './spinner'

import axios from 'axios';
window['axios'] = axios;

ReactDOM.render(
	<Provider store={appStore}>
		<div>
			<h1>BugTracker</h1>
			<hr/>
			<Spinner/>
			<hr/>
			<BugTracker/>
		</div>
	</Provider>,
	document.getElementById('root'));	

