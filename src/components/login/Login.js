import Axios from 'axios';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

const Login = ({ setToken }) => {
	const initialState = {
		email: '',
		password: '',
	};
	const [formState, setFormState] = useState(initialState);
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formState);
		Axios({
			url: 'http://localhost:8000/token/login/',
			method: 'POST',
			data: formState
		}).then(res => {
			console.log(res);
			setToken(res.data.auth_token)
			console.log(res.data.auth_token);
		});
		<Redirect to='/home'/>
		setFormState(initialState);
	};
	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};
	return (
		<div>
			Login
			<form onSubmit={handleSubmit}>
				<label htmlFor='email'>Enter Email: </label>
				<input id='email' onChange={handleChange} value={formState.email} /> <br />
				<label htmlFor='password'>Enter Password: </label>
				<input
					id='password'
					onChange={handleChange}
					value={formState.password}
				/>
				<button type='submit'>Submit</button>
			</form>
			<Link to='/registration'>Register</Link>
		</div>
	);
};

export default Login;
