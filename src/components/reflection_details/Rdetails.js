import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom';

const Rdetails = ({ loggedIn, match }) => {
    const [reflection, setReflection] = useState('')
    const endpoint = `${match.params.id}`;
	const url = `http://localhost:8000/reflections/${endpoint}`;
	const handleDelete = () => {
		Axios({
			url: url,
			method: 'DELETE',
			headers: {
				Authorization: `Token ${localStorage.token}`,
			},
		}).then(<Redirect to='/reflections' />);
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
    return (
        <div style={{ display: loggedIn ? 'block' : 'none' }}>
            Reflection Details<br />
            {reflection.date}
			<div>
				<button onClick={handleDelete}>Delete</button>
			</div>
        </div>
    );
};

export default Rdetails;