import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Hdetails = ({ loggedIn, match }) => {
	const [habit, setHabit] = useState('');
	const endpoint = `${match.params.id}`;
	const url = `http://localhost:8000/habits/${endpoint}`;
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
		</div>
	);
};

export default Hdetails;
