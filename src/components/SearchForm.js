import React, { useState } from 'react';
import {
	Form,
	FormControl,
	ToggleButtonGroup,
	ToggleButton,
	InputGroup,
} from 'react-bootstrap';

const SearchForm = ({ searchObj, setSearchObj }) => {
	const initialState = {
		title: '',
		author: '',
		isbn: '',
	};
	const [formState, setFormState] = useState(initialState);
	const handleChange = (event) => {
		setSearchObj(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		setSearchObj(searchObj);
	};
	return (
		<div>
			<Form inline className='searchForm'>
				<InputGroup>
					<FormControl
						placeholder='Search by Title'
						aria-label='Search By'
						aria-describedby='basic-addon2'
					/>
				</InputGroup>
				<InputGroup>
					<FormControl
						placeholder='Search by Author'
						aria-label='Search By'
						aria-describedby='basic-addon2'
					/>
				</InputGroup>
				<InputGroup>
					<FormControl
						placeholder='Search by ISBN'
						aria-label='Search By'
						aria-describedby='basic-addon2'
					/>
				</InputGroup>
			</Form>
		</div>
	);
};

export default SearchForm;
