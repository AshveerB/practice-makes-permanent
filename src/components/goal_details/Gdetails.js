import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

const Gdetails = ({ loggedIn, match }) => {
    const [goal, setGoal] = useState('');
	const endpoint = `${match.params.id}`;
	const url = `http://localhost:8000/goals/${endpoint}`;
	const handleDelete = () => {
		Axios({
			url: url,
			method: 'DELETE',
			headers: {
				Authorization: `Token ${localStorage.token}`,
			},
		}).then(<Redirect to='/goals' />);
	};
	useEffect(() => {
		Axios({
			url: url,
			method: 'GET',
			headers: {
				Authorization: `Token ${localStorage.token}`,
			},
		}).then((res) => {
			setGoal(res.data);
		});
	}, [url]);
    return <div style={{ display: loggedIn ? 'block' : 'none' }}>
            Goal Details<br />
            {goal?.date}
			<div>
				<button onClick={handleDelete}>Delete</button>
			</div>
        </div>;
};

export default Gdetails;