import React from 'react';
import { Card, CardColumns, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BookList = ({ books }) => {
	if (!books) {
		return <div>Book List not Found</div>;
	}
	return (
		<div className='book-list'>
			<CardColumns>
				{books.map((book, i) => {
					return (
						<Card key={i} className='book-box card-cascade-narrower'>
							{book.volumeInfo.imageLinks && (
								<Card.Img
									className='book-image'
									src={book.volumeInfo.imageLinks.thumbnail}
								/>
							)}

							<Card.Title>{book.volumeInfo.title}</Card.Title>
							{book.volumeInfo.authors &&
								book.volumeInfo.authors.map((author, i) => {
									return (
										<Card.Subtitle key={i} className='mb-2 text-muted'>
											{author}
										</Card.Subtitle>
									);
								})}
							{book.volumeInfo.categories && (
								<Card.Subtitle variant='secondary' size='sm'>
									{book.volumeInfo.categories[0]}
								</Card.Subtitle>
							)}
							{book.volumeInfo.industryIdentifiers ? (
								<Link
									to={`/books/${book.volumeInfo.industryIdentifiers[0].identifier}`}>
									<Button variant='outline-dark'>Details</Button>
								</Link>
							) : null}
						</Card>
					);
				})}
			</CardColumns>
		</div>
	);
};

export default BookList;
