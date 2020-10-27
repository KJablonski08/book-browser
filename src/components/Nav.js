import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const nav = () => {
	return (
		<div>
			<Navbar bg='dark' variant='dark'>
				<Link to='/'>
					<Navbar.Brand href='#home' className='margin'>
						Book Browser
					</Navbar.Brand>
				</Link>
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
