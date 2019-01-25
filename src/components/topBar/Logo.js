import React from 'react';
import { Link } from 'react-router-dom'

function Logo(props) {
	return (
		<Link className="logo" to='/' >Cranders</Link>
		// <a href="index.html" className="logo">
		// 	Cranders
		// </a>
	);
}

export default Logo;
