import React from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Category from './Category';
import NytBestsellers from './NytBestsellers';

const Home = ({ searchObj, setSearchObj, history }) => {
	return (
		<div>
			<br />
			<Jumbotron fluid className='margin'>
				<Container>
					<h1>Book Browser</h1>
					<Link to='/books'>
						<Button variant='dark'>Books</Button>
					</Link>
				</Container>
			</Jumbotron>
			<Category
				searchObj={searchObj}
				setSearchObj={setSearchObj}
				history={history}
			/>
			<br />
			<NytBestsellers />
		</div>
	);
};

export default Home;
