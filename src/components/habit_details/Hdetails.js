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
			<div className='habitsDetailsTitle'>Habit Details</div>
			<br />
			<div className='habitsDetailDate'>Date: {habit?.date}</div>
			<br />
			<div className='habitsDetailSleep'>Amount of sleep: {habit?.sleep}</div>
			<br />
			<div className='habitsDetailWater'>Amount of water: {habit?.water}</div>
			<br />
			<div className='habitsDetailExercise'>
				Amount of exercise: {habit?.exercise}
			</div>
			<br />
			<div className='habitsDetailCalories'>
				Amount of calories: {habit?.calories}
			</div>
			<br />
			<div className='habitsDetailLearning'>
				Time spent learning: {habit?.learning}
			</div>
			<br />
			<div className='habitsDetailSpending'>Money spent: {habit?.spending}</div>
			<br />
			<div className='habitsDetailEarning'>Money earned: {habit?.earning}</div>
			<br />
			<div className='HabitsDetailTravel'>Places traveled: {habit?.travel}</div>
			<br />
			<div className='HabitsDetailUpdate'>Update:</div>
			<div className='habitFormContainer'>
				<form onSubmit={handleSubmit} className='habitForm'>
					<label htmlFor='sleep' className='habitsUpdateSleepLabel'>
						Enter amount of time for sleep:{' '}
					</label>
					<input
						id='sleep'
						onChange={handleChange}
						value={habit.sleep}
						className='habitsUpdateSleepInput'
					/>
					<br />
					<label htmlFor='water' className='habitsUpdateWaterLabel'>
						Enter amount of water consumed:{' '}
					</label>
					<input
						id='water'
						onChange={handleChange}
						value={habit.water}
						className='habitsUpdateWaterInput'
					/>
					<br />
					<label htmlFor='exercise' className='habitsUpdateExerciseLabel'>
						Enter the amount of time for exercise:{' '}
					</label>
					<input
						id='exercise'
						onChange={handleChange}
						value={habit.exercise}
						className='habitsUpdateExerciseInput'
					/>
					<br />
					<label htmlFor='calories' className='habitsUpdateCaloriesLabel'>
						Enter the amount of calories consumed:{' '}
					</label>
					<input
						id='calories'
						onChange={handleChange}
						value={habit.calories}
						className='habitsUpdateCaloriesInput'
					/>
					<br />
					<label htmlFor='learning' className='habitsUpdateLearningLabel'>
						Enter amount of time for learning:{' '}
					</label>
					<input
						id='learning'
						onChange={handleChange}
						value={habit.learning}
						className='habitsUpdateLearningInput'
					/>
					<br />
					<label htmlFor='earning' className='habitsUpdateEarningLabel'>
						Enter amount of money earned:{' '}
					</label>
					<input
						id='earning'
						onChange={handleChange}
						value={habit.earning}
						className='habitsUpdateEarningInput'
					/>
					<br />
					<label htmlFor='spending' className='habitsUpdateSpendingLabel'>
						Enter amount of money spent:{' '}
					</label>
					<input
						id='spending'
						onChange={handleChange}
						value={habit.spending}
						className='habitsUpdateSpendingInput'
					/>{' '}
					<br />
					<label htmlFor='travel' className='habitsUpdateTravelLabel'>
						Enter the amount of time traveling:{' '}
					</label>
					<input
						id='travel'
						onChange={handleChange}
						value={habit.travel}
						className='habitsUpdateTravelInput'
					/>{' '}
					<br />
					<label htmlFor='date' className='habitsUpdateDateLabel'>
						Enter the date(YYYY-MM-DD):{' '}
					</label>
					<input
						id='date'
						onChange={handleChange}
						value={habit.date}
						className='habitsUpdateDateInput'
					/>
					<br />
					<button type='submit' className='habitsUpdateFormSubmit hvr-grow'>
						Update
					</button>
				</form>
			</div>
			<div>
				<button onClick={handleDelete} className='habitDetailDelete hvr-grow'>
					Delete
				</button>
			</div>
		</div>
	);
};

export default Hdetails;
