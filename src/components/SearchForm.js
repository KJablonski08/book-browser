import React, { useState } from 'react';
import {
	Form,
	FormControl,
	ToggleButtonGroup,
	ToggleButton,
	InputGroup,
} from 'react-bootstrap';

const SearchForm = () => {
	const [value, setValue] = useState([1, 3]);
	const handleToggleChange = (val) => setValue(val);
	return (
		<div className='search'>
			<Form inline>
				<InputGroup>
					<FormControl
						placeholder='Search By'
						aria-label='Search By'
						aria-describedby='basic-addon2'
					/>
					<ToggleButtonGroup
						type='checkbox'
						value={value}
						onChange={handleToggleChange}>
						<ToggleButton variant='outline-secondary' value={1}>
							Title
						</ToggleButton>
						<ToggleButton variant='outline-secondary' value={2}>
							Author
						</ToggleButton>
						<ToggleButton variant='outline-secondary' value={3}>
							ISBN
						</ToggleButton>
					</ToggleButtonGroup>
				</InputGroup>
			</Form>
		</div>
	);
};

export default SearchForm;
