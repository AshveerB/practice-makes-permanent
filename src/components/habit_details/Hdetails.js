import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const Hdetails = ({ loggedIn, match }) => {
	const [habit, setHabit] = useState('');
	const endpoint = `${match.params.id}`;
	const url = `https://practice-makes-permanent.herokuapp.com/habits/${endpoint}/`;
	const history = useHistory();
	const handleDelete = () => {
		Axios({
			url: url,
			method: 'DELETE',
			headers: {
				Authorization: `Token ${localStorage.token}`,
			},
		}).then(() => {
			history.push('/habits');
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
			setHabit(res.data);
		});
	}, [url]);
	const [formState, setFormState] = useState(habit);
	const handleChange = (event) => {
		setHabit({ ...habit, [event.target.id]: event.target.value });
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
			history.push('/habits');
		});
		setFormState(habit);
	};
	return (
		<div style={{ display: loggedIn ? 'block' : 'none' }}>
			Habit Details
			<br />
			Date: {habit?.date}
			<br />
			Amount of sleep: {habit?.sleep}
			<br />
			Amount of water: {habit?.water}
			<br />
			Amount of exercise: {habit?.exercise}
			<br />
			Amount of calories: {habit?.calories}
			<br />
			Time spent learning: {habit?.learning}
			<br />
			Money spent: {habit?.spending}
			<br />
			Money earned: {habit?.earning}
			<br />
			Places traveled: {habit?.travel}
			<br />
			Update:
			<form onSubmit={handleSubmit}>
				<label htmlFor='sleep'>Enter amount of time for sleep: </label>
				<input id='sleep' onChange={handleChange} value={habit.sleep} />
				<br />
				<label htmlFor='water'>Enter amount of water consumed: </label>
				<input id='water' onChange={handleChange} value={habit.water} />
				<br />
				<label htmlFor='exercise'>
					Enter the amount of time for exercise:{' '}
				</label>
				<input id='exercise' onChange={handleChange} value={habit.exercise} />
				<br />
				<label htmlFor='calories'>
					Enter the amount of calories consumed:{' '}
				</label>
				<input id='calories' onChange={handleChange} value={habit.calories} />
				<br />
				<label htmlFor='learning'>Enter amount of time for learning: </label>
				<input id='learning' onChange={handleChange} value={habit.learning} />
				<br />
				<label htmlFor='earning'>Enter amount of money earned: </label>
				<input id='earning' onChange={handleChange} value={habit.earning} />
				<br />
				<label htmlFor='spending'>Enter amount of money spent: </label>
				<input
					id='spending'
					onChange={handleChange}
					value={habit.spending}
				/>{' '}
				<br />
				<label htmlFor='travel'>Enter the amount of time traveling: </label>
				<input id='travel' onChange={handleChange} value={habit.travel} />{' '}
				<br />
				<label htmlFor='date'>Enter the date(YYYY-MM-DD): </label>
				<input id='date' onChange={handleChange} value={habit.date} />
				<br />
				<button type='submit' className='hvr-grow'>Update</button>
			</form>
			<div>
				<button onClick={handleDelete} className='hvr-grow'>Delete</button>
			</div>
		</div>
	);
};

export default Hdetails;
