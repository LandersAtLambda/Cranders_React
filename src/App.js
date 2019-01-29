import React from 'react';
import { Route } from 'react-router-dom';
import TopBarContainer from './components/topBar/TopBarContainer';
import Projects from './components/projects/Projects';
import data from './data.js';
import Contact from './components/contact/Contact';
import { Jumbotron } from 'reactstrap';

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
				<TopBarContainer />
				<Jumbotron>
					<h1>Welcome</h1>
				</Jumbotron>
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
				<Route
					path="/contact"
					render={props => <Contact {...props} />}
				/>
				{/* <div className="container">
					<div className="bodyWrap">
						<Projects handlePreview={this.handlePreview} data={this.state.data} />
					</div>
				</div> */}
			</React.Fragment>
		);
	}
}

export default App;
