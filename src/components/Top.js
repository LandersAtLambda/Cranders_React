import React from 'react';
import styled from 'styled-components';

const TopSection = styled.section`
	box-sizing: border-box;
	width: 100%;
	height: 100vh;
	background-color: #141414;
	color: #3c81e3;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	font-size: 6rem;
	font-weight: 300;
	padding: 20px;

	p:nth-child(even) {
		color: #fff;
		font-weight: 300;
		font-size: 4rem;
		margin-top: -50px;
	}
`;
function Top() {
	return (
		<TopSection>
			<p className='name'>Mike Landers</p>
			<p className='subTitle'>Full Stack Developer</p>
		</TopSection>
	);
}

export default Top;
