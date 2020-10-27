import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<Jumbotron fluid>
				<Container>
					<h1>Book Browser</h1>
					<Link to='/books'>
						<button>Books</button>
					</Link>
				</Container>
			</Jumbotron>
		</div>
	);
};

export default Home;
