import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';

const Habits = ({ loggedIn }) => {
	const url = 'http://localhost:8000/habits/';
	const initialState = {
		sleep: '',
		water: '',
		exercise: '',
		calories: '',
		learning: '',
		earning: '',
		spending: '',
		travel: '',
		date: '',
	};
	const [habits, setHabits] = useState([]);
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
		<Redirect to='/habits' />;
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
			setHabits(res.data);
		});
	}, [url]);
	return (
		<div style={{ display: loggedIn ? 'block' : 'none' }}>
			{' '}
			Habits
			<form onSubmit={handleSubmit}>
				<label htmlFor='sleep'>Enter amount of time for sleep: </label>
				<input id='sleep' onChange={handleChange} value={formState.sleep} />
				<br />
				<label htmlFor='water'>Enter amount of water consumed: </label>
				<input id='water' onChange={handleChange} value={formState.water} />
				<br />
				<label htmlFor='exercise'>
					Enter the amount of time for exercise:{' '}
				</label>
				<input
					id='exercise'
					onChange={handleChange}
					value={formState.exercise}
				/>
				<br />
				<label htmlFor='calories'>
					Enter the amount of calories consumed:{' '}
				</label>
				<input
					id='calories'
					onChange={handleChange}
					value={formState.calories}
				/>
				<br />
				<label htmlFor='learning'>Enter amount of time for learning: </label>
				<input
					id='learning'
					onChange={handleChange}
					value={formState.learning}
				/>
				<br />
				<label htmlFor='earning'>Enter amount of money earned: </label>
				<input id='earning' onChange={handleChange} value={formState.earning} />
				<br />
				<label htmlFor='spending'>Enter amount of money spent: </label>
				<input
					id='spending'
					onChange={handleChange}
					value={formState.spending}
				/>{' '}
				<br />
				<label htmlFor='travel'>Enter the amount of time traveling: </label>
				<input
					id='travel'
					onChange={handleChange}
					value={formState.travel}
				/>{' '}
				<br />
				<label htmlFor='date'>Enter the date: </label>
				<input id='date' onChange={handleChange} value={formState.date} />
				<br />
				<button type='submit'>Submit</button>
			</form>
			<div>
				Record of Habits:
				<br />
				<ul>
					{habits.map((habit) => (
						<Link to={`/habits/${habit.id}`} key={habit.id}>
							<h2 key={habit.id}>{habit.date}</h2>
						</Link>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Habits;
