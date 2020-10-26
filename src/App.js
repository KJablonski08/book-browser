import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';

const App = () => {
	return (
		<div>
			<header>
				<Nav />
			</header>
			<main>
				<Route path='/' exact component={Home} />
			</main>
		</div>
	);
};

export default App;
