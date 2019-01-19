import React from 'react';
import { Card, CardBody, CardLink, CardTitle, Button } from 'reactstrap';

function Project(props) {
	// console.log(props.item);
	return (
		<Card>
			<CardBody>
				<CardTitle>{props.item.name}</CardTitle>
			</CardBody>
			<img
				width="100%"
				src={props.item.img}
				alt={props.item.name}
			/>
			<CardBody>
				<Button color="primary" size='lg' onClick={(e) => { props.handlePreview(e, props.item.github) }}>GitHub</Button>
				<Button color="primary" size='lg' onClick={(e) => { props.handlePreview(e, props.item.preview) }}>Preview</Button>
			</CardBody>
		</Card>
	);
}

export default Project;
