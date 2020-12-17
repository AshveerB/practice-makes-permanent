import { React, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Home from './components/home/Home';
import Habits from './components/habits/Habits';
import Goals from './components/goals/Goals';
import Reflection from './components/reflection/Reflection';
import Analysis from './components/analysis/Analysis';
import Login from './components/login/Login';
import Registration from './components/registration/Registration';
import Header from './components/header/Header';
import './App.css';

function App() {
	const [token, setToken] = useState(null)
	return (
		<div className='App'>
			<Header />
			<Navigation token={token} />
			<main>
				<Route path='/home' exact component={Home} />
				<Route path='/' exact render={() => <Redirect to='/home' />} />
				<Route 
					path='/habits'
					exact
					render={() => {
						return <Habits token={token} />;
					}}
				/>
				<Route 
					path='/goals'
					exact
					render={() => {
						return <Goals token={token} />;
					}} 
				/>
				<Route 
					path='/reflections'
					exact
					render={() => {
						return <Reflection token={token} />;
					}}
				/>
				<Route 
					path='/analysis'
					exact
					render={() => {
						return <Analysis token={token} />;
					}}
				/>
				<Route 
					path='/login'
					exact
					render={() => {
						return <Login setToken={setToken} />
					}}
				/>
				<Route path='/registration' component={Registration} />
			</main>
		</div>
	);
}

export default App;
