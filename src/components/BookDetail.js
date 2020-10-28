import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookDetail = ({ match }) => {
	const [book, setBook] = useState(null);
	useEffect(() => {
		fetch(
			`https://www.googleapis.com/books/v1/volumes?q=isbn:${match.params.book}&key=${process.env.REACT_APP_KEY}`
		)
			.then((res) => res.json())
			.then((res) => {
				setBook(res.items[0]);
			})
			.catch(console.error);
	}, []);
	console.log(book);
	if (book === null) {
		return null;
	}
	return (
		<div>
			<Card className='book-box card-cascade-narrower detail'>
				<Card.Img
					className='book-image'
					src={book.volumeInfo.imageLinks.thumbnail}
				/>
				<Card.Title>{book.volumeInfo.title}</Card.Title>
				{book.volumeInfo.authors.map((author, i) => {
					return (
						<Card.Subtitle className='mb-2 text-muted'>{author}</Card.Subtitle>
					);
				})}
				<Card.Subtitle variant='secondary' size='sm'>
					{book.volumeInfo.categories[0]}
				</Card.Subtitle>
			</Card>
			<Link to={'/books'}>
				<Button>BookList</Button>
			</Link>
		</div>
	);
};

export default BookDetail;
