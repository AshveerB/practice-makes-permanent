import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Reflection.css';

const Reflection = ({ loggedIn }) => {
	const url = 'https://practice-makes-permanent.herokuapp.com/reflections/';
	const initialState = {
		reflection: '',
		date: '',
	};
	const [reflections, setReflections] = useState([]);
	const [formState, setFormState] = useState(initialState);
	const history = useHistory();
	const handleSubmit = (event) => {
		event.preventDefault();
		Axios({
			url: url,
			method: 'POST',
			headers: {
				Authorization: `Token ${localStorage.token}`,
			},
			data: formState,
		}).then(() => {
			history.push('/');
		});
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
			<div className='reflectionTitle'>Reflection</div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='reflection' className='reflectionLabel'>
					Enter Reflection:{' '}
				</label>
				<input
					type='textarea'
					id='reflection'
					onChange={handleChange}
					value={formState.reflection}
					placeholder='Enter Thoughts'
					className='reflectioninput'
				/>
				<br />
				<label htmlFor='date' className='reflectionDateLabel'>
					Enter the date(YYYY-MM-DD):{' '}
				</label>
				<input
					id='date'
					onChange={handleChange}
					value={formState.date}
					placeholder='YYYY-MM-DD'
					className='reflectionDateInput'
				/>
				<br />
				<button type='submit' className='reflectionFormSubmit hvr-grow'>
					Submit
				</button>
			</form>
			<div>
				<div className='reflectionRecords'>Record of Reflections:</div>
				<br />
				<ul>
					{reflections.map((reflection) => (
						<Link to={`/reflections/${reflection.id}`} key={reflection.id}>
							<h2 key={reflection.id} className='reflectionsList hvr-grow'>
								{reflection.date}
							</h2>
						</Link>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Reflection;
