import React, { useState } from 'react';

const Reflection = () => {
    const initialState = {
        reflection: '',
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
            Reflection
            <form onSubmit={handleSubmit}>
                <label htmlFor='reflection'>Enter Reflection: </label>
                <input 
                    type='textarea'
                    id='reflection'
                    onChange={handleChange}
                    value={formState.reflection}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Reflection;