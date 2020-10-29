import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import BookList from './components/BookList';
import SearchForm from './components/SearchForm';
import BookDetail from './components/BookDetail';

const App = () => {
	const [books, setBooks] = useState(null);
	const [searchObj, setSearchObj] = useState({});
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
				<SearchForm searchObj={searchObj} setSearchObj={setSearchObj} />
			</header>
			<main>
				<Route exact path='/' component={Home} />
				<Route
					exact
					path='/books'
					render={() => {
						return <BookList books={books} />;
					}}
				/>
				<Route
					path='/books/:book'
					render={(routerProps) => {
						return <BookDetail match={routerProps.match} />;
					}}
				/>
			</main>
		</div>
	);
};

export default App;
