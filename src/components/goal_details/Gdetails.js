import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Gdetails = ({ loggedIn, match }) => {
    const [goal, setGoal] = useState('');
	const endpoint = `${match.params.id}`;
	const url = `http://localhost:8000/goals/${endpoint}`;
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
        </div>;
};

export default Gdetails;