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
	if (!list) {
		return (
			<div className='book-list'>
				<p>Book List not Found</p>
			</div>
		);
	}
	return (
		<div>
			<Container className='authors'>
				<h4>The New York Times Best Sellers</h4>
				<h2>Best Sellers: {list.results.list_name}</h2>
				<Carousel>
					{list.results.books.map((bestseller, i) => {
						return (
							<Carousel.Item>
								<span>{bestseller.rank} </span>
								<img
									className='nyt-img'
									src={bestseller.book_image}
									alt='First slide'
								/>
							</Carousel.Item>
						);
					})}
				</Carousel>
			</Container>
		</div>
	);
};

export default NytBestsellers;
