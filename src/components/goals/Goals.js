import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './Goals.css';

const Goals = ({ loggedIn }) => {
	const url = 'https://practice-makes-permanent.herokuapp.com/goals/';
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
	const [goals, setGoals] = useState([]);
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
			setGoals(res.data);
		});
	}, [url]);
	return (
		<div style={{ display: loggedIn ? 'block' : 'none' }}>
			<div className='goalsTitle'>Goals</div>
			<form onSubmit={handleSubmit}>
				<label htmlFor='sleep' className='goalsSleepLabel'>
					Enter amount of time for sleep:{' '}
				</label>
				<input
					id='sleep'
					onChange={handleChange}
					value={formState.sleep}
					placeholder='Sleep'
					className='goalsSleepInput'
				/>
				<br />
				<label htmlFor='water' className='goalsWaterLabel'>
					Enter amount of water consumed:{' '}
				</label>
				<input
					id='water'
					onChange={handleChange}
					value={formState.water}
					placeholder='Water'
					className='goalsWaterInput'
				/>
				<br />
				<label htmlFor='exercise' className='goalsExerciseLabel'>
					Enter the amount of time for exercise:{' '}
				</label>
				<input
					id='exercise'
					onChange={handleChange}
					value={formState.exercise}
					placeholder='Exercise'
					className='goalsExerciseInput'
				/>
				<br />
				<label htmlFor='calories' className='goalsCaloriesLabel'>
					Enter the amount of calories consumed:{' '}
				</label>
				<input
					id='calories'
					onChange={handleChange}
					value={formState.calories}
					placeholder='Calories'
					className='goalsCaloriesInput'
				/>
				<br />
				<label htmlFor='learning' className='goalsLearningLabel'>
					Enter amount of time for learning:{' '}
				</label>
				<input
					id='learning'
					onChange={handleChange}
					value={formState.learning}
					placeholder='Learning'
					className='goalsLearningInput'
				/>
				<br />
				<label htmlFor='earning' className='goalsEarningLabel'>
					Enter amount of money earned:{' '}
				</label>
				<input
					id='earning'
					onChange={handleChange}
					value={formState.earning}
					placeholder='Earning'
					className='goalsEarningInput'
				/>
				<br />
				<label htmlFor='spending' className='goalsSpendingLabel'>
					Enter amount of money spent:{' '}
				</label>
				<input
					id='spending'
					onChange={handleChange}
					value={formState.spending}
					placeholder='Spending'
					className='goalsSpendingInput'
				/>
				<br />
				<label htmlFor='travel' className='goalsTravelLabel'>
					Enter the amount of time traveling:{' '}
				</label>
				<input
					id='travel'
					onChange={handleChange}
					value={formState.travel}
					placeholder='Travel'
					className='goalsTravelInput'
				/>
				<br />
				<label htmlFor='date' className='goalsDateLabel'>
					Enter the date(YYYY-MM-DD):{' '}
				</label>
				<input
					id='date'
					onChange={handleChange}
					value={formState.date}
					placeholder='YYYY-MM-DD'
					className='goalsDateInput'
				/>
				<br />
				<button type='submit' className='goalsFormSubmit hvr-grow'>
					Submit
				</button>
			</form>
			<div>
				<div className='goalsRecord'>Record of Goals:</div>
				<br />
				<ul>
					{goals.map((goal) => (
						<Link to={`/goals/${goal.id}`} key={goal.id}>
							<h2 key={goal.id} className='goalsList hvr-grow'>
								{goal.date}
							</h2>
						</Link>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Goals;
