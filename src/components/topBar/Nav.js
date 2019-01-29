import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
	return (
		<nav>
			{/* <a href="index.html">Home</a> */}
			<Link to="/">Home</Link>
			{/* <a href="cranders.com">About</a>
			<a href="#portfolio">Portfolio</a> */}
			{/* <a href="cranders.com">Contact</a> */}

			<Link to="/contact">Contact</Link>
		</nav>
	);
}

export default Nav;
