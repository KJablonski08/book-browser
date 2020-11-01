import React from 'react';
import SearchForm from './SearchForm';
import { Card, CardColumns, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const BookList = ({ books, searchObj, setSearchObj }) => {
	if (!books) {
		return (
			<div className='book-list'>
				<SearchForm searchObj={searchObj} setSearchObj={setSearchObj} />
				<div className='d-flex justify-content-center'>
					<Spinner animation='border' variant='primary' />
					<h6>Loading... Please Wait</h6>
					<Link to={'/'}>
						<Button>Home</Button>
					</Link>
				</div>
			</div>
		);
	}
	return (
		<div className='book-list'>
			<SearchForm searchObj={searchObj} setSearchObj={setSearchObj} />
			<CardColumns>
				{books.map((book, i) => {
					return (
						<Card className='book-box card-cascade-narrower border-0'>
							<div className='row no-gutters'>
								<div className='col-md-4'>
									{book.volumeInfo.imageLinks && (
										<Card.Img
											className='book-image'
											src={book.volumeInfo.imageLinks.thumbnail}
										/>
									)}
								</div>
								<div className='col-md-8'>
									<div className='card-body'>
										<Card.Text>{book.volumeInfo.title}</Card.Text>
										<br />
										{book.volumeInfo.authors &&
											book.volumeInfo.authors.map((author, i) => {
												return (
													<Card.Subtitle key={i} className='mb-2 text-muted'>
														{author}
													</Card.Subtitle>
												);
											})}
										<br />
										{book.volumeInfo.categories && (
											<Card.Subtitle variant='secondary' size='sm'>
												{book.volumeInfo.categories[0]}
											</Card.Subtitle>
										)}
										<br />
										{book.volumeInfo.industryIdentifiers ? (
											<Link
												to={`/books/${book.volumeInfo.industryIdentifiers[0].identifier}`}>
												<Button variant='dark'>Details</Button>
											</Link>
										) : null}
									</div>
								</div>
							</div>
						</Card>
					);
				})}
			</CardColumns>
		</div>
	);
};

export default BookList;
