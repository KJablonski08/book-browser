import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const nav = () => {
	return (
		<div>
			<Navbar bg='dark' variant='dark'>
				<Navbar.Brand href='#home' className='margin'>
					<Link to='/'>Book Browser</Link>
				</Navbar.Brand>
				<Nav className='mr-auto'>
					{/* <Nav.Link href='#home'>Home</Nav.Link>
					<Nav.Link href='#features'>Features</Nav.Link>
					<Nav.Link href='#pricing'>Pricing</Nav.Link> */}
				</Nav>
			</Navbar>
		</div>
	);
};

export default nav;
