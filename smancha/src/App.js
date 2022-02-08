import { Route, Routes, Navigate, BrowserRouter as Router } from 'react-router-dom';

import Home from './components/Home/Home'
import ResearchInterests from './components/ResearchInterests/ResearchInterests';
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
					{/* <Route path="*">
						<Navigate to="/" />
					</Route> */}
				</Routes>
			</div>
		</Router>
	);
}

export default App;
