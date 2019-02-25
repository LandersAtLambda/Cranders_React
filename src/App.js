import React from 'react';
import { Route } from 'react-router-dom';
import Projects from './components/projects/Projects';
import data from './data.js';
import Top from './components/Top';
import Bottom from './components/Bottom';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	font-family: 'Roboto', sans-serif;

`;

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	componentDidMount = () => {
		this.setState({
			data: data,
		});
	};

	handlePreview = (e, url) => {
		e.preventDefault();
		console.log(url);
		window.open(`${url}`);
	};

	render(props) {
		console.log(this.state.data);
		return (
			<React.Fragment>
				<GlobalStyle />
				<Top />
				<Route
					exact
					path="/"
					render={props => (
						<Projects
							{...props}
							handlePreview={this.handlePreview}
							data={this.state.data}
						/>
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
}

export default App;
