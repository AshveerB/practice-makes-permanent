import React from 'react';
import { Link } from 'react-router-dom'

const Navigation = () => {
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
                <Link to='/login'>Login</Link>
            </span>
        </div>
    );
};

export default Navigation;