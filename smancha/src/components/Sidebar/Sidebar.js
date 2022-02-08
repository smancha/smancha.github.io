import { NavLink } from 'react-router-dom'

import ProfilePhoto from '../../res/yayoi.jpg'
import './Sidebar.css';

function Sidebar() {
	return (
		<div className='sidebar-background text-center'>
			<div className=''>
				<img src={ProfilePhoto} className='rounded-circle profile-photo center' alt='Sebastián Mancha' />
				<p className='display-4'> Sebastián Mancha </p>
			</div>
			<hr className='divider' />
			<ul className='nav flex-column'>
				<li className='nav-item lead'>
					<NavLink className='nav-link' to='/'> Home </NavLink>
				</li>
				<li className='nav-item lead'>
					<NavLink className='nav-link' to='/research-interests'> Research Interests </NavLink>
				</li>
				<li className='nav-item lead'>
					<NavLink className='nav-link' to='/'> Projects </NavLink>
				</li>
				<li className='nav-item lead'>
					<NavLink className='nav-link' to='/'> CV </NavLink>
				</li>
			</ul>
		</div>
	);
}

export default Sidebar
