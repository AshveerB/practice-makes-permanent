import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = ({ loggedIn, handleLogout }) => {
	return (
		<nav className='navbar'>
			<span className='hvr-grow'>
				<Link to='/home'>Home</Link>
			</span>
			<span className='hvr-grow'>
				<Link to='/habits'>Habits</Link>
			</span>
			<span className='hvr-grow'>
				<Link to='/goals'>Goals</Link>
			</span>
			<span className='hvr-grow'>
				<Link to='/reflections'>Reflections</Link>
			</span>
			<span className='hvr-grow'>
				{!loggedIn && <Link to='/login'>Login</Link>}
				{loggedIn && <button onClick={handleLogout}>Logout</button>}
			</span>
		</nav>
	);
};

export default Navigation;
