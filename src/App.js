import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import BookList from './components/BookList';
import SearchForm from './components/SearchForm';

const App = () => {
	return (
		<div>
			<header>
				<Nav />
				<SearchForm />
			</header>
			<main>
				<Route exact path='/' component={Home} />
				<Route path='/books' component={BookList} />
			</main>
		</div>
	);
};

export default App;
