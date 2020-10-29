import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookDetail = ({ match }) => {
	const [book, setBook] = useState(null);
	const [error, setError] = useState();
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
	if (book === null) {
		return (
			<div>
				<h5>I'm Sorry - there was an error. Please try another book</h5>
				<Link to={'/books'}>
					<Button>BookList</Button>
				</Link>
			</div>
		);
	}
	return (
		<div>
			<Card className='book-box card-cascade-narrower detail'>
				<a target='_blank' rel='noreferrer' href={book.volumeInfo.previewLink}>
					<Card.Img
						className='book-image'
						src={book.volumeInfo.imageLinks.thumbnail}
					/>
				</a>
				<Card.Title>{book.volumeInfo.title}</Card.Title>
				{book.volumeInfo.authors.map((author, i) => {
					return (
						<Card.Subtitle key={i} className='mb-2 text-muted'>
							{author}
						</Card.Subtitle>
					);
				})}
				<Card.Subtitle variant='secondary' size='sm'>
					{book.volumeInfo.categories[0]}
				</Card.Subtitle>
				<hr />
				<Card.Text>{book.volumeInfo.description}</Card.Text>
				<Card.Text variant='secondary' size='sm'>
					Publisher: {book.volumeInfo.publisher}
				</Card.Text>
				<Card.Text variant='secondary' size='sm'>
					Published Date: {book.volumeInfo.publishedDate}
				</Card.Text>
				<Card.Text variant='secondary' size='sm'>
					Page Count: {book.volumeInfo.pageCount}
				</Card.Text>
				<hr />
				<a target='_blank' rel='noreferrer' href={book.volumeInfo.infoLink}>
					<Button>Purchase Now</Button>
				</a>
				{/* SOURCE: https://stackoverflow.com/questions/42914666/react-router-external-link */}
			</Card>
			<Link to={'/books'}>
				<Button>BookList</Button>
			</Link>
		</div>
	);
};

export default BookDetail;
