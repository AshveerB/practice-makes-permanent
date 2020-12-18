import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

const Hdetails = ({ loggedIn, match }) => {
	const [habit, setHabit] = useState('');
	const endpoint = `${match.params.id}`;
	const url = `http://localhost:8000/habits/${endpoint}`;
	const handleDelete = () => {
		Axios({
			url: url,
			method: 'DELETE',
			headers: {
				Authorization: `Token ${localStorage.token}`,
			},
		}).then(<Redirect to='/habits'/>)
	}
	useEffect(() => {
		Axios({
			url: url,
			method: 'GET',
			headers: {
				Authorization: `Token ${localStorage.token}`,
			},
		}).then((res) => {
			setHabit(res.data);
		});
	}, [url]);
	return (
		<div style={{ display: loggedIn ? 'block' : 'none' }}>
			Habit Details
			<br />
			{habit?.date}
			<div>
				<button onClick={handleDelete}>Delete</button>
			</div>
		</div>
	);
};

export default Hdetails;
