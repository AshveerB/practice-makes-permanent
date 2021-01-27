import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Habits.css';

const Habits = ({ loggedIn }) => {
	const url = 'https://practice-makes-permanent.herokuapp.com/habits/';
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
	const history = useHistory();
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
			setHabits(res.data);
		});
	}, [url]);
	return (
		<div style={{ display: loggedIn ? 'block' : 'none' }}>
			{' '}
			<div className='habitsTitle'>Habits</div>
			<div className='habitFormContainer'>
				<form onSubmit={handleSubmit} className='habitForm'>
					<label htmlFor='sleep' className='habitsSleepLabel'>
						Enter amount of time for sleep:{' '}
					</label>
					<input
						id='sleep'
						onChange={handleChange}
						value={formState.sleep}
						placeholder='Sleep'
						className='habitsSleepInput'
					/>
					<br />
					<label htmlFor='water' className='habitsWaterLabel'>
						Enter amount of water consumed:{' '}
					</label>
					<input
						id='water'
						onChange={handleChange}
						value={formState.water}
						placeholder='Water'
						className='habitsWaterInput'
					/>
					<br />
					<label htmlFor='exercise' className='habitsExerciseLabel'>
						Enter the amount of time for exercise:{' '}
					</label>
					<input
						id='exercise'
						onChange={handleChange}
						value={formState.exercise}
						placeholder='Exercise'
						className='habitsExerciseInput'
					/>
					<br />
					<label htmlFor='calories' className='habitsCaloriesLabel'>
						Enter the amount of calories consumed:{' '}
					</label>
					<input
						id='calories'
						onChange={handleChange}
						value={formState.calories}
						placeholder='Calories'
						className='habitsCaloriesInput'
					/>
					<br />
					<label htmlFor='learning' className='habitsLearningLabel'>
						Enter amount of time for learning:{' '}
					</label>
					<input
						id='learning'
						onChange={handleChange}
						value={formState.learning}
						placeholder='Learning'
						className='habitsLearningInput'
					/>
					<br />
					<label htmlFor='earning' className='habitsEarningLabel'>
						Enter amount of money earned:{' '}
					</label>
					<input
						id='earning'
						onChange={handleChange}
						value={formState.earning}
						placeholder='Earning'
						className='habitsEarningInput'
					/>
					<br />
					<label htmlFor='spending' className='habitsSpendingLabel'>
						Enter amount of money spent:{' '}
					</label>
					<input
						id='spending'
						onChange={handleChange}
						value={formState.spending}
						placeholder='Spending'
						className='habitsSpendingInput'
					/>{' '}
					<br />
					<label htmlFor='travel' className='habitsTravelLabel'>
						Enter the amount of time traveling:{' '}
					</label>
					<input
						id='travel'
						onChange={handleChange}
						value={formState.travel}
						placeholder='Travel'
						className='habitsTravelInput'
					/>{' '}
					<br />
					<label htmlFor='date' className='habitsDateLabel'>
						Enter the date(YYYY-MM-DD):{' '}
					</label>
					<input
						id='date'
						onChange={handleChange}
						value={formState.date}
						placeholder='YYYY-MM-DD'
						className='habitsDateInput'
					/>
					<br />
					<button type='submit' className='habitsFormSubmit hvr-grow'>
						Submit
					</button>
				</form>
			</div>
			<div>
				<div className='habitsRecords'>Record of Habits:</div>
				<br />
				<ul>
					{habits.map((habit) => (
						<Link to={`/habits/${habit.id}`} key={habit.id}>
							<h2 key={habit.id} className='habitsList hvr-grow'>
								{habit.date}
							</h2>
						</Link>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Habits;
