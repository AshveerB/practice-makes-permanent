import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css'

const BurgerLinks = () => {
	return (
		<div className='burgerLinks'>
			<div className='hvr-grow'>
				<Link to='/home'>Home</Link>
			</div>
			<div className='hvr-grow'>
				<Link to='/habits'>Habits</Link>
			</div>
			<div className='hvr-grow'>
				<Link to='/goals'>Goals</Link>
			</div>
			<div className='hvr-grow'>
				<Link to='/reflections'>Reflections</Link>
			</div>
		</div>
	);
};

export default BurgerLinks;
