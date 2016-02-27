import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, Navigation, browserHistory, hashHistory} from 'react-router';

import Home from './components/Home/Index.jsx'; // Main Home Component
import NotFound from './components/NotFound/Index.jsx';

let routes = (
	<Router history={browserHistory}>
		<Route path="/" component={Home} />
	</Router>
);

export default routes;