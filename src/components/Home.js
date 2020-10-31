import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Button, Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = ({ searchObj, setSearchObj }) => {
	const handleSubmit = (event) => {
		event.preventDefault();
		setSearchObj({ ...searchObj, author: event.target.textContent });
	};
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
			<Container className='authors'>
				<h2>Most Browsed Authors</h2>
				<br />
				<Carousel>
					<Carousel.Item>
						<Button
							onClick={handleSubmit}
							className='carousel-btn'
							variant='dark'>
							William Shakespeare
						</Button>
						<Button className='carousel-btn' variant='dark'>
							Rowling
						</Button>
						<Button className='carousel-btn' variant='dark'>
							Books
						</Button>
					</Carousel.Item>
					<Carousel.Item>
						<Button
							className='carousel-btn'
							variant='dark'
							onClick={handleSubmit}>
							Agatha Christie
						</Button>

						<Button className='carousel-btn' variant='dark'>
							Books
						</Button>

						<Button className='carousel-btn' variant='dark'>
							Books
						</Button>
					</Carousel.Item>
					<Carousel.Item>
						<Button className='carousel-btn' variant='dark'>
							Books
						</Button>

						<Button className='carousel-btn' variant='dark'>
							Books
						</Button>

						<Button className='carousel-btn' variant='dark'>
							Books
						</Button>
					</Carousel.Item>
				</Carousel>
			</Container>
		</div>
	);
};

export default Home;
