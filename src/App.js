import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import BookList from './components/BookList';
import SearchForm from './components/SearchForm';

const App = () => {
	const [books, setBooks] = useState(null);
	useEffect(() => {
		fetch(
			`https://www.googleapis.com/books/v1/volumes?q=intitle:the+stand&inauthor:king&key=${process.env.REACT_APP_KEY}`
		)
			.then((res) => res.json())
			.then((res) => {
				setBooks(res.items);
			})
			.catch(console.error);
	}, []);
	return (
		<div>
			<header>
				<Nav />
				<SearchForm />
			</header>
			<main>
				<Route exact path='/' component={Home} />
				<Route
					path='/books'
					render={() => {
						return <BookList books={books} />;
					}}
				/>
				{/* <Route path='/book/:book' render=() />*/}
			</main>
		</div>
	);
};

export default App;
