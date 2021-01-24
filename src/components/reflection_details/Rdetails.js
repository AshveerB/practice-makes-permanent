import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const Rdetails = ({ loggedIn, match }) => {
	const [reflection, setReflection] = useState('');
	const endpoint = `${match.params.id}`;
	const url = `https://practice-makes-permanent.herokuapp.com/reflections/${endpoint}/`;
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
			<div className='reflectionDetailsTitle'>Reflection Details</div>
			<br />
			<div className='reflectionDetailsDate'>Date: {reflection.date}</div>
			<br />
			<div className='reflectionDetailsReflection'>Reflection: {reflection.reflection}</div>
			<br />
			<div className='reflectionDetailUpdate'>UPDATE:</div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='reflection' className='reflectionUpdateLabel'>Enter Reflection: </label>
				<input
					type='textarea'
					id='reflection'
					onChange={handleChange}
					value={reflection.reflection}
					className='reflectionUpdateInput'
				/>
				<br />
				<label htmlFor='date' className='reflectionUpdateDateLabel'>Enter the date(YYYY-MM-DD): </label>
				<input id='date' onChange={handleChange} value={reflection.date} className='reflectionUpdateDateInput'/>
				<br />
				<button type='submit' className='reflectionUpdateSubmit hvr-grow'>Update</button>
			</form>
			<div>
				<button onClick={handleDelete} className='reflectionDelete hvr-grow'>Delete</button>
			</div>
		</div>
	);
};

export default Rdetails;
