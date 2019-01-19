import React from 'react';
import TopBarContainer from './components/topBar/TopBarContainer';
import Projects from './components/projects/Projects';
import data from './data.js';

// import Cards from './components/cards/Cards';

import './styles.css';

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

	render(props) {
		console.log(this.state.data);
		return (
			<React.Fragment>
				<div className="container">
					<TopBarContainer />
					{/* <div className="hero">
					<div className="attribution">
						Credit:{' '}
						<a href="https://www.flickr.com/photos/98786299@N00/9889667656/">
							Flickr/Peter Thoeny
						</a>
					</div>
					<div className="tagline">
						<h1>Full Stack Web Developer</h1>
						<br />
						<h4>In Training</h4>
					</div>
					<div className="headshot">
						<img src={headshot} alt="" />
					</div>
				</div> */}
					<div className="bodyWrap">
						<div className="portfolio">
							<h2>Projects</h2>
							<div className="projects">
								<Projects data={this.state.data} />
							</div>
						</div>
					</div>
					<footer>
						<nav>
							<a href="cranders.com">Home</a>
							<a href="cranders.com">Contact</a>
						</nav>
					</footer>
				</div>
			</React.Fragment>
		);
	}
}

export default App;
