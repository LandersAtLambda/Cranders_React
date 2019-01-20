import React from 'react';
import { Card, CardBody, CardHeader, Button } from 'reactstrap';

function Project(props) {
	// console.log(props.item);
	return (
		<Card>
			<CardHeader>{props.item.name}</CardHeader>
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
