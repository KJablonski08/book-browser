import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const nav = () => {
	return (
		<div>
			<Navbar bg='dark' variant='dark'>
				<Navbar.Brand href='#home' className='search'>
					Navbar
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
