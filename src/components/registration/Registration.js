import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import './Registration.css'

const Registration = () => {
	const initialState = {
		username: '',
		email: '',
		password: '',
		re_password: '',
	};
	const history = useHistory()
	const [formState, setFormState] = useState(initialState);
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formState);
		Axios({
			url: 'http://localhost:8000/users/',
			method: 'POST',
			data: formState,
		}).then(() => {
			history.push('/login')
		})
		setFormState(initialState);
	};
	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};
	return (
		<div className='regdiv'>
			Register Below:
			<form onSubmit={handleSubmit}>
				<label htmlFor='username'>Enter Username: </label>
				<input
					id='username'
					onChange={handleChange}
					value={formState.username}
				/>
				<br />
				<label htmlFor='email'>Enter Email: </label>
				<input id='email' onChange={handleChange} value={formState.email} />
				<br />
				<label htmlFor='password'>Enter Password: </label>
				<input
					id='password'
					onChange={handleChange}
					value={formState.password}
				/>
				<br />
				<label htmlFor='re_password'>Confirm Password: </label>
				<input
					id='re_password'
					onChange={handleChange}
					value={formState.re_password}
				/>
				<button type='submit'>Submit</button>
			</form>
			Email must be unique<br />
			Password must be combination of at least 8 letters and numbers
		</div>
	);
};

export default Registration;
