import Axios from 'axios';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import './Login.css'

const Login = ({ loggedIn, setLoggedIn }) => {
	const initialState = {
		email: '',
		password: '',
	};
	const [formState, setFormState] = useState(initialState);
	const handleSubmit = (event) => {
		event.preventDefault();
		Axios({
			url: 'http://localhost:8000/token/login/',
			method: 'POST',
			data: formState,
		}).then((res) => {
			localStorage.setItem('token', res.data.auth_token);
			setLoggedIn(true);
		});
		setFormState(initialState);
	};
	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};
	if (loggedIn) {
		return <Redirect to='/' />;
	}
	return (
		<div className='login'>
			Login Below:
			<form onSubmit={handleSubmit}>
				<label htmlFor='email'>Enter Email: </label>
				<input
					id='email'
					onChange={handleChange}
					value={formState.email}
				/>{' '}
				<br />
				<label htmlFor='password'>Enter Password: </label>
				<input
					id='password'
					onChange={handleChange}
					value={formState.password}
				/>
				<button type='submit'>Submit</button>
			</form>
			Not Signed up? Register Below:<br />
			<Link to='/registration' className='registration'>Register</Link>
		</div>
	);
};

export default Login;
