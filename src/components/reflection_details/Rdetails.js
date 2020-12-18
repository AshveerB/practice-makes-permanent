import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Rdetails = ({ loggedIn, match }) => {
    const [reflection, setReflection] = useState('')
    const endpoint = `${match.params.id}`;
		const url = `http://localhost:8000/reflections/${endpoint}`;
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
        </div>
    );
};

export default Rdetails;