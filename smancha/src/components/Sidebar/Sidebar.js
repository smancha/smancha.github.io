import { NavLink } from 'react-router-dom'

import ProfilePhoto from '../../res/smancha.jpg'
import './Sidebar.css';

function Sidebar() {
	return (
		<div>
			<div className='sticky-top navbar'>
				<p className='heading-6 name light'> Sebastián Mancha </p>
				<nav>
					<ul className='nav'>
						<li className='nav-item lead navbar-item'>
							<NavLink className='nav-link light' to='/'> Home </NavLink>
						</li>
						<li className='nav-item lead navbar-item'>
							<NavLink className='nav-link light' to='/research-interests'> Research Interests </NavLink>
						</li>
						<li className='nav-item lead navbar-item'>
							<NavLink className='nav-link light' to='/projects'> Projects </NavLink>
						</li>
						<li className='nav-item lead navbar-item'>
							<NavLink className='nav-link light' to='/cv'> CV </NavLink>
						</li>
					</ul>
				</nav>
			</div>
			<div className='sticky-top sidebar'>
				<div className='sidebar-background text-center light'>
					<img src={ProfilePhoto} className='rounded-circle profile-photo center' alt='Sebastián Mancha' />
					<p className='heading-5 name'> Sebastián Mancha </p>
					<hr className='divider' />
					<nav className='sidebar-items'>
						<ul className='nav flex-column'>
							<li className='nav-item lead'>
								<NavLink className='nav-link light' to='/'> Home </NavLink>
							</li>
							<li className='nav-item lead'>
								<NavLink className='nav-link light' to='/research-interests'> Research Interests </NavLink>
							</li>
							<li className='nav-item lead'>
								<NavLink className='nav-link light' to='/projects'> Projects </NavLink>
							</li>
							<li className='nav-item lead'>
								<NavLink className='nav-link light' to='/cv'> CV </NavLink>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
	);
}

export default Sidebar
