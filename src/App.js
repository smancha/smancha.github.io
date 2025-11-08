import { Route, Routes, HashRouter as Router } from 'react-router-dom';

import ComingSoon from './components/ComingSoon';
import Sidebar from './components/Sidebar/Sidebar';
import Home from './components/Home/Home'
import ResearchInterests from './components/ResearchInterests/ResearchInterests';
import Projects from './components/Projects/Projects';
import CV from './components/CV/CV';
// import Collaborators from './components/Collaborators/Collaborators';
// import Blogs from './components/Blogs/Blogs';
// import Blog from './components/Blogs/Blog/Blog';
import './App.css';

const pages = [
	{
		path: "/",
		exact: true,
		element: () => <Home />
	},
	{
		path: "/research-interests",
		element: () => <ResearchInterests />
	},
	{
		path: "/projects",
		element: () => <Projects />
	},
	{
		path: "/cv",
		element: () => <CV />
	},
	{
		path: "/collaborators",
		element: () => <ComingSoon />
	},
	{
		path: "/blogs",
		element: () => <ComingSoon />
	},
	{
		path: "/blog/:id",
		element: () => <ComingSoon />
	},
	{
		path: "/teaching",
		element: () => <ComingSoon />
	}
]


function App() {
	return (
		<Router>
			<div className='main'>
				<div className='container-fluid'>
					<div className='row'>
						<div className='col-xs-6 col-md-4 col-lg-3 p-0'>
							<Sidebar />
						</div>
						<div className='col-xs-6 col-md-8 col-lg-9'>
							<Routes>
								{pages.map((page, index) => (
									<Route
										key={index}
										path={page.path}
										exact={page.exact}
										element={<page.element />}
									/>
								))}
							</Routes>
						</div>
					</div>
				</div>
			</div>

			{/* website coming soon */}
			{/* <Routes>
					<Route 
						exact path='/'
						element={<ComingSoon />}
					/>
				</Routes> */}
		</Router>
	);
}

export default App;