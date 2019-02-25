import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Projects from './components/projects/Projects';
import db from './data.js';
import Top from './components/Top';
import Bottom from './components/Bottom';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	font-family: 'Roboto', sans-serif;

`;

function App() {
	const [data, setData] = useState();

	useEffect(() => {
		setData(db);
	});

	handlePreview = (e, url) => {
		e.preventDefault();
		console.log(url);
		window.open(`${url}`);
	};

	return (
		<React.Fragment>
			<GlobalStyle />
			<Top />
			<Route
				exact
				path="/"
				render={props => (
					<Projects {...props} handlePreview={this.handlePreview} data={data} />
				)}
			/>
			{/* <div className="container">
					<div className="bodyWrap">
						<Projects handlePreview={this.handlePreview} data={this.state.data} />
					</div>
				</div> */}
			<Bottom />
		</React.Fragment>
	);
}

export default App;
