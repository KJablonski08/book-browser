import React from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<Jumbotron fluid>
				<Container>
					<h1>Book Browser</h1>
					<Link to='/books'>
						<Button variant='dark'>Books</Button>
					</Link>
				</Container>
			</Jumbotron>
		</div>
	);
};

export default Home;
