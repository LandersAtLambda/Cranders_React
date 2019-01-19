import React from 'react';
import Project from './Project';

function Projects(props) {
	return (
		<div className='portfolio'>
			{props.data.map(item => {
				return <Project handlePreview={props.handlePreview} key={item.id} item={item} />;
			})}
		</div>
	);
}

export default Projects;
