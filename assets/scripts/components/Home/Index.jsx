import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Header from '../Header/Index.jsx';
import Footer from '../Footer/Index.jsx';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<div>
				<Header />
				<h1>Hoodsense</h1>
				<Footer />
			</div>
		)
	}

}

export default App;