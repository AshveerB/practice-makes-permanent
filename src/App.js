import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
	return (
		<div className='App'>
			Practice Makes Permanent!
			<Header />
			<Navigation />
			<Footer />
			<main>Routes</main>
		</div>
	);
}

export default App;
