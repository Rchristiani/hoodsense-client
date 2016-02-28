import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header/Index.jsx';
import Footer from './Footer/Index.jsx';

import Home from './Home/Index.jsx';


class App extends Component {

	render() {
		return (
			<div>
				<Header />
				{this.props.children || <Home />}
				<Footer />
			</div>
		);
	}

}

export default App