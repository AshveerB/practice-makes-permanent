import React from 'react';
import { Link } from 'react-router-dom'
import './Navigation.css'

const Navigation = ({ loggedIn, handleLogout }) => {
    return (
        <div>
            <span>
                <Link to='/home'>Home</Link>
            </span>
            <span>
                <Link to='/habits'>Habits</Link>
            </span>
            <span>
                <Link to='/goals'>Goals</Link>
            </span>
            <span>
                <Link to='/reflections'>Reflections</Link>
            </span>
            <span>
                <Link to='/analysis'>Analysis</Link>
            </span>
            <span>
                {!loggedIn && <Link to='/login'>Login</Link>}
				{loggedIn && (
					<button onClick={handleLogout}>
						Logout
					</button>
				)}
            </span>
        </div>
    );
};

export default Navigation;