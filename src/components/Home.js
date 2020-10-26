import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const Home = () => {
	return (
		<div>
			<Jumbotron fluid>
				<Container>
					<h1>Book Browser</h1>
					<p>
						This is a modified jumbotron that occupies the entire horizontal
						space of its parent.
					</p>
				</Container>
			</Jumbotron>
		</div>
	);
};

export default Home;
