import React from 'react';
import Project from './Project';
import { Card } from 'reactstrap';

function Projects(props) {
	console.log(props.data.name);
	return (
		<Card>
			{props.data.map(item => {
				return <Project item={item} />;
			})}
		</Card>
	);
}

export default Projects;
