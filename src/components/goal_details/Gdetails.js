import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';

const Gdetails = ({ loggedIn, match }) => {
	const [goal, setGoal] = useState('');
	const endpoint = `${match.params.id}`;
	const url = `https://practice-makes-permanent.herokuapp.com/goals/${endpoint}/`;
	const history = useHistory();
	const handleDelete = () => {
		Axios({
			url: url,
			method: 'DELETE',
			headers: {
				Authorization: `Token ${localStorage.token}`,
			},
		}).then(() => {
			history.push('/goals');
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
			<div className='goalsDetailsTitle'>Goal Details</div>
			<br />
			<div className='goalsDetailsDate'>Date: {goal?.date}</div>
			<br />
			<div className='goalsDetailSleep'>Amount of sleep: {goal?.sleep}</div>
			<br />
			<div className='goalsDetailWater'>Amount of water: {goal?.water}</div>
			<br />
			<div className='goalsDetailExercise'>
				Amount of exercise: {goal?.exercise}
			</div>
			<br />
			<div className='goalsDetailCalories'>
				Amount of calories: {goal?.calories}
			</div>
			<br />
			<div className='goalsDetailLearning'>
				Time spent learning: {goal?.learning}
			</div>
			<br />
			<div className='goalsDetailSpending'>Money spent: {goal?.spending}</div>
			<br />
			<div className='goalsDetailEarning'>Money earned: {goal?.earning}</div>
			<br />
			<div className='goalsDetailTravel'>Places traveled: {goal?.travel}</div>
			<br />
			<div className='goalsDetailUpdate'>Update:</div>
			<div className='goalFormContainer'>
				<form onSubmit={handleSubmit} className='goalsForm'>
					<label htmlFor='sleep' className='goalsUpdateSleepLabel'>
						Enter amount of time for sleep:{' '}
					</label>
					<input
						id='sleep'
						onChange={handleChange}
						value={goal.sleep}
						className='goalsUpdateSleepInput'
					/>
					<br />
					<label htmlFor='water' className='goalsUpdateWaterLabel'>
						Enter amount of water consumed:{' '}
					</label>
					<input
						id='water'
						onChange={handleChange}
						value={goal.water}
						className='goalsUpdateWaterInput'
					/>
					<br />
					<label htmlFor='exercise' className='goalsUpdateExerciseLabel'>
						Enter the amount of time for exercise:{' '}
					</label>
					<input
						id='exercise'
						onChange={handleChange}
						value={goal.exercise}
						className='goalsUpdateExerciseInput'
					/>
					<br />
					<label htmlFor='calories' className='goalsUpdateCaloriesLabel'>
						Enter the amount of calories consumed:{' '}
					</label>
					<input
						id='calories'
						onChange={handleChange}
						value={goal.calories}
						className='goalsUpdateCaloriesInput'
					/>
					<br />
					<label htmlFor='learning' className='goalsUpdateLearningLabel'>
						Enter amount of time for learning:{' '}
					</label>
					<input
						id='learning'
						onChange={handleChange}
						value={goal.learning}
						className='goalsUpdateLearningInput'
					/>
					<br />
					<label htmlFor='earning' className='goalsUpdateEarningLabel'>
						Enter amount of money earned:{' '}
					</label>
					<input
						id='earning'
						onChange={handleChange}
						value={goal.earning}
						className='goalsUpdateEarningInput'
					/>
					<br />
					<label htmlFor='spending' className='goalsUpdateSpendingLabel'>
						Enter amount of money spent:{' '}
					</label>
					<input
						id='spending'
						onChange={handleChange}
						value={goal.spending}
						className='goalsUpdateSpendingInput'
					/>
					<br />
					<label htmlFor='travel' className='goalsUpdateTravelLabel'>
						Enter the amount of time traveling:{' '}
					</label>
					<input
						id='travel'
						onChange={handleChange}
						value={goal.travel}
						className='goalsUpdateTraveInput'
					/>
					<br />
					<label htmlFor='date' className='goalsUpdateDateLabel'>
						Enter the date(YYYY-MM-DD):{' '}
					</label>
					<input
						id='date'
						onChange={handleChange}
						value={goal.date}
						className='goalsUpdateDateInput'
					/>
					<br />
					<button type='submit' className='goalsUpdateFormSubmit hvr-grow'>
						Update
					</button>
				</form>
			</div>
			<div>
				<button onClick={handleDelete} className='goalDetailDelete hvr-grow'>
					Delete
				</button>
			</div>
		</div>
	);
};

export default Gdetails;
