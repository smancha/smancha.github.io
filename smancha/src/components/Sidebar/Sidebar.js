import { NavLink } from 'react-router-dom'

import ProfilePhoto from '../../res/smancha.jpg'
import './Sidebar.css';

function Sidebar() {
	return (
		<div className='sidebar-background text-center'>
			<div className=''>
				<img src={ProfilePhoto} className='rounded-circle profile-photo center' alt='Sebastián Mancha' />
				<p className='heading-5 name'> Sebastián Mancha </p>
			</div>
			<hr className='divider' />
			<ul className='nav flex-column'>
				<li className='nav-item lead'>
					<NavLink className='nav-link a-light' to='/'> Home </NavLink>
				</li>
				<li className='nav-item lead'>
					<NavLink className='nav-link a-light' to='/research-interests'> Research Interests </NavLink>
				</li>
				<li className='nav-item lead'>
					<NavLink className='nav-link a-light' to='/projects'> Projects </NavLink>
				</li>
				<li className='nav-item lead'>
					<NavLink className='nav-link a-light' to='/cv'> CV </NavLink>
				</li>
			</ul>
		</div>
	);
}

export default Sidebar
