import React, { useState } from 'react';

const Login = () => {
    const initialState = {
        email: '',
        password: '',
    }
    const [formState, setFormState] = useState(initialState);
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(formState);
		setFormState(initialState);
	};
	const handleChange = (event) => {
		setFormState({ ...formState, [event.target.id]: event.target.value });
	};
    return (
        <div>
            Login
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Enter Email: </label>
                <input 
                    id='email'
                    onChange={handleChange}
                    value={formState.email}
                />
                <label htmlFor='password'>Enter Password: </label>
                <input 
                    id='password'
                    onChange={handleChange}
                    value={formState.password}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Login;