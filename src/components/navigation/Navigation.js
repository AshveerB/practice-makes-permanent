import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BurgerLinks from './BurgerLinks';
import './Navigation.css';

const Navigation = ({ loggedIn, handleLogout }) => {
	const [menuDisplay, setMenuDisplay] = useState(false);
	const menuClick = () => {
		setMenuDisplay(!menuDisplay);
	};
	return (
		<div>
			<nav className='navigationContainer'>
				<div className='brand'>Practice Makes Permanent</div>
				<div className='navigation'>
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
				</div>
				<div className='burgerContainer'>
					<div className='hvr-grow'>
						{!loggedIn && <Link to='/login'>Login</Link>}
						{loggedIn && <button onClick={handleLogout}>Logout</button>}
					</div>
					<div className='hamburgerNavigation hvr-grow' onClick={menuClick}>
						<span className='burger'></span>
						<span className='burger'></span>
						<span className='burger'></span>
					</div>
				</div>
			</nav>
			<div>{menuDisplay ? <BurgerLinks /> : null}</div>
		</div>
	);
};

export default Navigation;
