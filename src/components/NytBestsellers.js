import React, { useState, useEffect } from 'react';
import { Carousel, Container, Button } from 'react-bootstrap';

const NytBestsellers = () => {
	const [list, setList] = useState(null);
	useEffect(() => {
		fetch(
			`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NYT_KEY}`
		)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				setList(res);
			})
			.catch(console.error);
	}, []);
	console.log(list);
	return (
		<div>
			<Container className='authors'>
				<br />
				<Carousel>
					<Carousel.Item>
						<Button className='carousel-btn' variant='dark'></Button>
						<Button className='carousel-btn' variant='dark'></Button>
						<Button className='carousel-btn' variant='dark'></Button>
					</Carousel.Item>
					<Carousel.Item>
						<Button className='carousel-btn' variant='dark'></Button>
						<Button className='carousel-btn' variant='dark'></Button>
						<Button className='carousel-btn' variant='dark'></Button>
					</Carousel.Item>
					<Carousel.Item>
						<Button className='carousel-btn' variant='dark'></Button>
						<Button className='carousel-btn' variant='dark'></Button>
						<Button className='carousel-btn' variant='dark'></Button>
					</Carousel.Item>
					<Carousel.Item>
						<Button className='carousel-btn' variant='dark'></Button>
						<Button className='carousel-btn' variant='dark'></Button>
						<Button className='carousel-btn' variant='dark'></Button>
					</Carousel.Item>
					<Carousel.Item>
						<Button className='carousel-btn' variant='dark'></Button>
						<Button className='carousel-btn' variant='dark'></Button>
						<Button className='carousel-btn' variant='dark'></Button>
					</Carousel.Item>
				</Carousel>
			</Container>
		</div>
	);
};

export default NytBestsellers;
