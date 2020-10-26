import React from 'react';
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';

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
				<Form inline className='search'>
					<FormControl type='text' placeholder='Search' className='mr-sm-2' />
					<Button variant='outline-info'>Search</Button>
				</Form>
			</Navbar>
		</div>
	);
};

export default nav;
