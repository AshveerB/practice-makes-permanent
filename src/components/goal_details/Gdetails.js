import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const Gdetails = ({ loggedIn, match }) => {
    const [goal, setGoal] = useState('');
	const endpoint = `${match.params.id}`;
	const url = `https://practice-makes-permanent.herokuapp.com/goals/${endpoint}/`;
	const history = useHistory()
	const handleDelete = () => {
		Axios({
			url: url,
			method: 'DELETE',
			headers: {
				Authorization: `Token ${localStorage.token}`,
			},
		}).then(() => {
			history.push('/goals')
		})
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
	const [formState, setFormState] = useState(goal);
	const handleChange = (event) => {
		setGoal({ ...goal, [event.target.id]: event.target.value });
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
			history.push('/goals');
		});
		setFormState(goal);
	};
    return (
			<div style={{ display: loggedIn ? 'block' : 'none' }}>
				Goal Details
				<br />
				Date: {goal?.date}
				<br />
				Amount of sleep: {goal?.sleep}
				<br />
				Amount of water: {goal?.water}
				<br />
				Amount of exercise: {goal?.exercise}
				<br />
				Amount of calories: {goal?.calories}
				<br />
				Time spent learning: {goal?.learning}
				<br />
				Money spent: {goal?.spending}
				<br />
				Money earned: {goal?.earning}
				<br />
				Places traveled: {goal?.travel}
				<br />
				Update:
				<form onSubmit={handleSubmit}>
					<label htmlFor='sleep'>Enter amount of time for sleep: </label>
					<input id='sleep' onChange={handleChange} value={goal.sleep} />
					<br />
					<label htmlFor='water'>Enter amount of water consumed: </label>
					<input id='water' onChange={handleChange} value={goal.water} />
					<br />
					<label htmlFor='exercise'>
						Enter the amount of time for exercise:{' '}
					</label>
					<input id='exercise' onChange={handleChange} value={goal.exercise} />
					<br />
					<label htmlFor='calories'>
						Enter the amount of calories consumed:{' '}
					</label>
					<input id='calories' onChange={handleChange} value={goal.calories} />
					<br />
					<label htmlFor='learning'>Enter amount of time for learning: </label>
					<input id='learning' onChange={handleChange} value={goal.learning} />
					<br />
					<label htmlFor='earning'>Enter amount of money earned: </label>
					<input id='earning' onChange={handleChange} value={goal.earning} />
					<br />
					<label htmlFor='spending'>Enter amount of money spent: </label>
					<input id='spending' onChange={handleChange} value={goal.spending} />
					<br />
					<label htmlFor='travel'>Enter the amount of time traveling: </label>
					<input id='travel' onChange={handleChange} value={goal.travel} />
					<br />
					<label htmlFor='date'>Enter the date(YYYY-MM-DD): </label>
					<input id='date' onChange={handleChange} value={goal.date} />
					<br />
					<button type='submit'>Update</button>
				</form>
				<div>
					<button onClick={handleDelete}>Delete</button>
				</div>
			</div>
		);
};

export default Gdetails;