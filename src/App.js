import React from 'react';
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
	return (
		<div className='App'>
			<Header />
			<Navigation />
			<main>
				<Route path='/home' exact component={Home} />
				<Route path='/' exact render={() => <Redirect to='/home' />} />
				<Route path='/habits' component={Habits} />
				<Route path='/goals' component={Goals} />
				<Route path='/reflections' component={Reflection} />
				<Route path='/analysis' component={Analysis} />
				<Route path='/login' component={Login} />
				<Route path='/registration' component={Registration} />
			</main>
		</div>
	);
}

export default App;
