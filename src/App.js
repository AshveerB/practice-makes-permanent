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
import Hdetails from './components/habit_details/Hdetails';
import Gdetails from './components/goal_details/Gdetails';
import Rdetails from './components/reflection_details/Rdetails';
import './App.css';

function App() {
	const [loggedIn, setLoggedIn] = useState(
		localStorage.getItem('token') ? true : false
	);
	const handleLogout = () => {
		localStorage.clear();
		setLoggedIn(false);
	};
	return (
		<div className='App'>
			<Header />
			<Navigation
				loggedIn={loggedIn}
				setLoggedIn={setLoggedIn}
				handleLogout={handleLogout}
			/>
			<main>
				<Route path='/home' exact component={Home} />
				<Route path='/' exact render={() => <Redirect to='/home' />} />
				<Route
					path='/habits'
					exact
					render={() => {
						return <Habits loggedIn={loggedIn} />;
					}}
				/>
				<Route
					path='/goals'
					exact
					render={() => {
						return <Goals loggedIn={loggedIn} />;
					}}
				/>
				<Route
					path='/reflections'
					exact
					render={() => {
						return <Reflection loggedIn={loggedIn} />;
					}}
				/>
				<Route
					path='/analysis'
					exact
					render={() => {
						return <Analysis loggedIn={loggedIn} />;
					}}
				/>
				<Route
					path='/login'
					exact
					render={() => {
						return <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />;
					}}
				/>
				<Route
					path='/habits/:id'
					render={(routerProps) => (
						<Hdetails match={routerProps.match} loggedIn={loggedIn} />
					)}
				/>
				<Route
					path='/goals/:id'
					render={(routerProps) => (
						<Gdetails match={routerProps.match} loggedIn={loggedIn} />
					)}
				/>
				<Route
					path='/reflections/:id'
					render={(routerProps) => (
						<Rdetails match={routerProps.match} loggedIn={loggedIn} />
					)}
				/>
				<Route path='/registration' component={Registration} />
			</main>
		</div>
	);
}

export default App;
