import React, { useState, useEffect } from 'react';

const BookList = () => {
	const [books, setBooks] = useState([]);
	useEffect(() => {
		fetch(
			`https://www.googleapis.com/books/v1/volumes?q=intitle:harry+potter+and+the+sorcerers+stone&key=${process.env.REACT_APP_KEY}`
		)
			.then((res) => res.json())
			.then((res) => {
				setBooks(res);
			})
			.catch(console.error);
	}, []);
	console.log(books);
	return (
		<div>
			<h1>Hello Book List</h1>
		</div>
	);
};

export default BookList;
