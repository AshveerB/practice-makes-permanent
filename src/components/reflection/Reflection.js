import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';

const Reflection = ({ loggedIn }) => {
	const url = 'http://localhost:8000/reflections/';
	const initialState = {
		reflection: '',
		date: '',
	};
	const [reflections, setReflections] = useState([])
	const [formState, setFormState] = useState(initialState);
	const handleSubmit = (event) => {
		event.preventDefault();
		Axios({
			url: url,
			method: 'POST',
			headers: {
				Authorization: `Token ${localStorage.token}`,
			},
			data: formState,
		});
		<Redirect to='/reflections' />;
		setFormState(initialState);
	};
	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};
	useEffect(() => {
		Axios({
			url: url,
			method: 'GET',
			headers: {
				Authorization: `Token ${localStorage.token}`,
			},
		}).then((res) => {
			setReflections(res.data);
		});
	}, [url]);
	return (
		<div style={{ display: loggedIn ? 'block' : 'none' }}>
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
			<div>
				Record of Reflections:
				<br />
				<ul>
					{reflections.map((reflection) => (
						<Link to={`/reflections/${reflection.id}`} key={reflection.id}>
							<h2 key={reflection.id}>{reflection.date}</h2>
						</Link>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Reflection;
