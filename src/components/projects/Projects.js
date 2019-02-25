import React from 'react';
import Project from './Project';
import styled from 'styled-components';

const Mid = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 1000px;
	width: 100%;
	margin: 0 auto;
	padding: 5px;
`;
const Button = styled.a`
	text-decoration: none;
	padding: 5px 10px;
	border-radius: 4px;
	font-size: 1.6rem;
	background-color: #3c81e3;
	color: #fff;
	margin: 0 5px;
	&:hover {
		text-decoration: none;
		/* padding: 5px 10px; */
		border-radius: 4px;
		background-color: #2f6dc4;
		color: #fff;
	}
`;

const Row = styled.article`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	max-height: 300px;
	height: 100%;
	width: 100%;
	margin: 20px auto 50px;
	&:nth-child(even) {
		flex-direction: row-reverse;
	}

	img {
		height: 300px;
		width: auto;
		border-radius: 4px;
		box-shadow: rgba(0, 0, 0, 0.3) 4px 4px 20px -1px;
	}
`;

const RowContent = styled.div`
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	max-width: 800px;
	width: 100%;
	height: 300px;
	padding: 0 10px 10px 10px;

	p {
		font-size: 1.6rem;
	}
`;

function Projects(props) {
	return (
		<Mid>
			{props.data.map(item => {
				return (
					<Row>
						<img src={item.img} />
						<RowContent>
							<div>
								<h2>{item.name}</h2>
								<p>Built in React</p>
							</div>
							<div className="rowBtns">
								<Button href="https://github.com/mlanders/React-Todo">
									GitHub
								</Button>
								<Button href="https://todo.mikelanders.me/">View</Button>
							</div>
						</RowContent>
					</Row>
				);
			})}
		</Mid>
	);
}

export default Projects;
