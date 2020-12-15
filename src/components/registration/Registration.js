import React, { useState } from 'react';

const Registration = () => {
	const initialState = {
		username: '',
		email: '',
		password: '',
		passwordConfirm: '',
	};
	const [formState, setFormState] = useState(initialState);
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formState);
		setFormState(initialState);
	};
	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};
	return (
		<div>
			Registration
			<form onSubmit={handleSubmit}>
				<label htmlFor='username'>Enter Username: </label>
				<input
					id='username'
					onChange={handleChange}
					value={formState.username}
				/>
				<label htmlFor='email'>Enter Email: </label>
				<input id='email' onChange={handleChange} value={formState.email} />
				<label htmlFor='password'>Enter Password: </label>
				<input
					id='password'
					onChange={handleChange}
					value={formState.password}
				/>
				<label htmlFor='passwordConfirm'>Confirm Password: </label>
				<input
					id='passwordConfirm'
					onChange={handleChange}
					value={formState.passwordConfirm}
				/>
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default Registration;
