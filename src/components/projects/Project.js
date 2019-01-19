import React from 'react';
import { CardBody, CardLink, CardTitle } from 'reactstrap';

function Project(props) {
	// console.log(props.item);
	return (
		<React.Fragment>
			<CardBody>
				<CardTitle>{props.item.name}</CardTitle>
			</CardBody>
			<img
				width="100%"
				src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
				alt={props.item.name}
			/>
			<CardBody>
				<CardLink href="#">{props.item.github}</CardLink>
				<CardLink href="#">{props.item.link}</CardLink>
			</CardBody>
		</React.Fragment>
	);
}

export default Project;
