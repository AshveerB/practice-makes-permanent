import Axios from 'axios';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

const Reflection = ({ token }) => {
	const initialState = {
		reflection: '',
		date: '',
	};
	const [formState, setFormState] = useState(initialState);
	const handleSubmit = (event) => {
		event.preventDefault();
        console.log(formState);
        console.log(token);
		Axios({
			url: 'http://localhost:8000/reflections/',
			method: 'POST',
			headers: { Authorization: `Bearer ${token}` },
			data: formState,
		});
		<Redirect to='/reflections' />
		setFormState(initialState);
	};
	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};
	return (
		<div>
			Reflection
			<form onSubmit={handleSubmit}>
				<label htmlFor='reflection'>Enter Reflection: </label>
				<input
					type='textarea'
					id='reflection'
					onChange={handleChange}
					value={formState.reflection}
				/>
				<br />
				<label htmlFor='date'>Enter the date: </label>
				<input id='date' onChange={handleChange} value={formState.date} />
				<br />
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default Reflection;
