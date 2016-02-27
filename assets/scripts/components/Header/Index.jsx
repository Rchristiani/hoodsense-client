import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Link , History } from 'react-router';

class Header extends Component {


	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return (
			<header>
				<h1>This is the header</h1>
			</header>
		);
	}


}

export default Header;
