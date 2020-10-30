import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import BookList from './components/BookList';
import SearchForm from './components/SearchForm';
import BookDetail from './components/BookDetail';
import NotFound from './components/NotFound';

const App = () => {
	let [books, setBooks] = useState(null);
	const [searchObj, setSearchObj] = useState({
		title: '',
		author: '',
		isbn: '',
	});
	useEffect(() => {
		fetch(
			`https://www.googleapis.com/books/v1/volumes?q=${
				searchObj.title ? `intitle:${searchObj.title}&` : ''
			}
      ${searchObj.author ? `inauthor:${searchObj.author}&` : ''}
      ${searchObj.isbn ? `isbn:${searchObj.isbn}&` : ''}
      key=${process.env.REACT_APP_KEY}`
		)
			.then((res) => res.json())
			.then((res) => {
				setBooks(res.items);
			})
			.catch(console.error);
	}, [searchObj.title, searchObj.author, searchObj.isbn]);
	return (
		<div>
			<header>
				<Nav />
			</header>
			<main>
				<Switch>
					<Route exact path='/' component={Home} />
					<Route
						exact
						path='/books'
						render={() => {
							return (
								<BookList
									books={books}
									searchObj={searchObj}
									setSearchObj={setSearchObj}
								/>
							);
						}}
					/>
					<Route
						path='/books/:book'
						render={(routerProps) => {
							return <BookDetail match={routerProps.match} />;
						}}
					/>
					<Route component={NotFound} />
				</Switch>
			</main>
		</div>
	);
};

export default App;
