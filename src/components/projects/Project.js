import React from 'react';
import { Card, CardBody, CardHeader, Button } from 'reactstrap';

function Project(props) {
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
				<div className="tags">
					{props.item.tags.map(tag => {
						return <i className={`tag fab ${tag}`} />
						// <Badge color='info'>tag</Badge>
					})}
				</div>
			</CardBody>
		</Card>
	);
}

export default Project;
