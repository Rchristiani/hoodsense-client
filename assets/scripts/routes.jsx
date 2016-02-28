import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, Navigation, browserHistory, hashHistory} from 'react-router';

import App from './components/App.jsx'; // Main Home Component
import NotFound from './components/NotFound/Index.jsx';
import Dashboard from './components/Dashboard/Index.jsx';

let routes = (
	<Router history={browserHistory}>
		<Route path="/" component={App} >
			<Route path="dashboard" component={Dashboard} />
		</Route>
	</Router>
);

export default routes;