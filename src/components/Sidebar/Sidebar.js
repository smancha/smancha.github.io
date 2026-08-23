import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './Sidebar.css';

const profilePicUrl = `${process.env.PUBLIC_URL}/content/profile.jpg`

class Sidebar extends Component {

	render() {
		return (
			<div>
				<div className='navbar sticky-navbar'>
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
							<li className='nav-item lead navbar-item'>
								<NavLink className='nav-link light' to='/collaborators'> Collaborators </NavLink>
							</li>
							<li className='nav-item lead navbar-item'>
								<NavLink className='nav-link light' to='/blogs'> Blogs </NavLink>
							</li>
							<li className='nav-item lead navbar-item'>
								<NavLink className='nav-link light' to='/teaching'> Teaching </NavLink>
							</li>
						</ul>
					</nav>
				</div>
				<div className='sidebar sticky-sidebar'>
					<div className='sidebar-background text-center light'>
						<img id='profile-pic' className='rounded-circle profile-photo center' alt='Sebastián Mancha' src={profilePicUrl} />
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
								<li className='nav-item lead'>
									<NavLink className='nav-link light' to='/collaborators'> Collaborators </NavLink>
								</li>
								<li className='nav-item lead'>
									<NavLink className='nav-link light' to='/blogs'> Blogs </NavLink>
								</li>
								<li className='nav-item lead'>
									<NavLink className='nav-link light' to='/teaching'> Teaching </NavLink>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</div>
		);
	}
}

export default Sidebar
