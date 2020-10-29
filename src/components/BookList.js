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
					if (book.volumeInfo.imageLinks) {
						return (
							<Card key={i} className='book-box card-cascade-narrower'>
								<Card.Img
									className='book-image'
									src={book.volumeInfo.imageLinks.thumbnail}
								/>
								<Card.Title>{book.volumeInfo.title}</Card.Title>
								{/* {book.volumeInfo.authors.map((author, i) => {
									return (
										<Card.Subtitle key={i} className='mb-2 text-muted'>
											{author}
										</Card.Subtitle>
									);
								})} */}
								{/* <Card.Subtitle variant='secondary' size='sm'>
									{book.volumeInfo.categories[0]}
								</Card.Subtitle> */}
								{/* {<Link
									to={`/books/${book.volumeInfo.industryIdentifiers[0].identifier}`}>
									<Button variant='outline-dark'>Details</Button>
								</Link> */}
							</Card>
						);
					} else {
						return (
							<Card key={i} className='book-box'>
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
