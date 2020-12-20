import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import APIURL from '../../Config';

const Rdetails = ({ loggedIn, match }) => {
	const [reflection, setReflection] = useState('');
	const endpoint = `${match.params.id}`;
	const url = `${APIURL}reflections/${endpoint}/`;
	const history = useHistory();
	const handleDelete = () => {
		Axios({
			url: url,
			method: 'DELETE',
			headers: {
				Authorization: `Token ${localStorage.token}`,
			},
		}).then(() => {
			history.push('/reflections');
		});
	};
	useEffect(() => {
		Axios({
			url: url,
			method: 'GET',
			headers: {
				Authorization: `Token ${localStorage.token}`,
			},
		}).then((res) => {
			setReflection(res.data);
		});
	}, [url]);
	const [formState, setFormState] = useState(reflection);
	const handleChange = (event) => {
		setReflection({ ...reflection, [event.target.id]: event.target.value });
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		Axios({
			url: url,
			method: 'PUT',
			headers: {
				Authorization: `Token ${localStorage.token}`,
			},
			data: formState,
		}).then(() => {
			history.push('/reflections');
		});
		setFormState(reflection);
	};
	return (
		<div style={{ display: loggedIn ? 'block' : 'none' }}>
			Reflection Details
			<br />
			Date: {reflection.date}
			<br />
			Reflection: {reflection.reflection}
			<br />
			UPDATE:
			<form onSubmit={handleSubmit}>
				<label htmlFor='reflection'>Enter Reflection: </label>
				<input
					type='textarea'
					id='reflection'
					onChange={handleChange}
					value={reflection.reflection}
					className='reflectioninput'
				/>
				<br />
				<label htmlFor='date'>Enter the date(YYYY-MM-DD): </label>
				<input id='date' onChange={handleChange} value={reflection.date} />
				<br />
				<button type='submit'>Update</button>
			</form>
			<div>
				<button onClick={handleDelete}>Delete</button>
			</div>
		</div>
	);
};

export default Rdetails;
