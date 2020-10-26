import React, { useState, useEffect } from 'react';

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
	if (books === null) {
		return null;
	}
	return (
		<div>
			<ul>
				{books.map((book) => {
					return <li>{book.volumeInfo.title}</li>;
				})}
			</ul>
		</div>
	);
};

export default BookList;
