import { Route, Routes, Navigate, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Home/Home'
import ResearchInterests from './components/ResearchInterests/ResearchInterests';
import Projects from './components/Projects/Projects';
import CV from './components/CV/CV';
import './App.css';

function App() {
	return (
		<Router>
			<div className='App'>
				<Routes>
					<Route
						exact path='/'
						element={<Home />}
					/>
					<Route
						exact path='research-interests'
						element={<ResearchInterests />}
					/>
					<Route
						exact path='projects'
						element={<Projects />}
					/>
					<Route
						exact path='cv'
						element={<CV />}
					/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;
