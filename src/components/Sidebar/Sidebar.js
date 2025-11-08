import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { ref, getDownloadURL } from "firebase/storage";

import { storage } from '../util/Firebase';
import './Sidebar.css';

class Sidebar extends Component {

	constructor() {
		super()

		this.state = {}

		this.getProfilePic = this.getProfilePic.bind(this)
	}

	componentDidMount() {
		this.getProfilePic()
	}

	async getProfilePic() {
		getDownloadURL(ref(storage, 'smancha.jpg'))
			.then((url) => {
				const img = document.getElementById('profile-pic');
				img.setAttribute('src', url);
			})
	}

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
						<img id='profile-pic' className='rounded-circle profile-photo center' alt='Sebastián Mancha' />
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
