import React from 'react';
import styled, { css } from 'styled-components';

const TopSection = styled.section`
	box-sizing: border-box;
	width: 100%;
	height: 100vh;
	background-color: #141414;
	color: #fff;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	font-size: 4rem;
	padding: 20px;
	font-weight: 300;

	p:nth-child(odd) {
		color: #3c81e3;
		font-weight: 300;
		font-size: 6rem;
	}
`;
function Top() {
	return (
		<TopSection>
			<p className="name">Mike Landers</p>
			<p className="subTitle">Full Stack Developer</p>
		</TopSection>
	);
}

export default Top;
