import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './assets/sass/app.sass';

import Dashboard from './screens/Dashboard';

ReactDOM.render(
	<Router>
		<Switch>
			<Route path='/' component={ Dashboard } exact />
		</Switch>
	</Router>,
	document.getElementById('root')
);
