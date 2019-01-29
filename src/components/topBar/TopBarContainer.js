import React from 'react';
import Logo from './Logo';
import Nav from './Nav';

function TopBarContainer(props) {
	return (
		<div className="headerWrap">
			<Logo />
			{/* <Nav /> */}
		</div>
	);
}

export default TopBarContainer;
