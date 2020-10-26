import React, { useState, useEffect } from 'react';
import { Card, CardColumns } from 'react-bootstrap';

const BookList = () => {
	const [books, setBooks] = useState(null);
	useEffect(() => {
		fetch(
			`https://www.googleapis.com/books/v1/volumes?q=intitle:harry+potter+and+the+sorcerers+stone&key=${process.env.REACT_APP_KEY}`
		)
			.then((res) => res.json())
			.then((res) => {
				setBooks(res.items);
			})
			.catch(console.error);
	}, []);
	console.log(books);
	if (books === null) {
		return null;
	}
	return (
		<div className='book-list'>
			<CardColumns>
				{books.map((book) => {
					if (book.volumeInfo.imageLinks) {
						return (
							<Card key={book.id}>
								<Card.Img src={book.volumeInfo.imageLinks.thumbnail} />
								<Card.Title>{book.volumeInfo.title}</Card.Title>
							</Card>
						);
					} else {
						return (
							<Card key={book.id}>
								<Card.Title>{book.volumeInfo.title}</Card.Title>
							</Card>
						);
					}
				})}
			</CardColumns>
		</div>
	);
};

export default BookList;
