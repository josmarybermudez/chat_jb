import React from 'react';
import ReactDOM from 'react-dom';
import { LandingRoute } from './routes/landing';
import { LoginRoute } from './routes/login'; 
import {
	BrowserRouter as Router,
	Switch,
	Route,
} from 'react-router-dom';

function main() {
	return (
		<Router>
			<Switch>
				<Route path='/login'>
					<LoginRoute />
				</Route>
				<Route path='/'>
					<LandingRoute />
				</Route>
			</Switch>
		</Router>
	)
}

ReactDOM.render(main(), document.getElementById('root'));
