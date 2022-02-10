import React, { Component } from 'react'

import Sidebar from '../Sidebar/Sidebar'
import './Home.css'

class Home extends Component {

	constructor() {
		super()

		this.state = {
			bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pretium fringilla blandit. \
			Proin volutpat sapien dolor, in porta nisl molestie et. Duis cursus nisi at semper luctus. Pellentesque \
			tristique, elit ac porta egestas, nisl ante tempor mauris, efficitur varius risus augue vel elit. Ut quis \
			pretium purus, vitae vestibulum enim. Ut finibus quam dolor, imperdiet venenatis nisl tempus quis. Fusce \
			blandit sem quis nisi volutpat, eu fermentum arcu aliquam. Nam porta, sem vel finibus dapibus, velit ipsum \
			eleifend tortor, in tempus diam arcu eu justo.",
		}
	}

	render() {
		return (
			<div className='background container-fluid'>
				<div className='row'>
					<div className='col-xs-6 col-sm-4 col-lg-3 p-0'>
						<Sidebar />
					</div>
					<div className='col-xs-6 col-sm-8 col-lg-9'>
						<div className='description text-justify container'>
							<div className='row justify-content-center'>
								<div className='col-lg-6'>
									<div>
										{this.state.bio}
									</div>
									<div className='contact-info'>
										<div><b>Email: </b><a className='a-dark text-decoration-none' target='_blank' href='mailto:smancha1231@utexas.edu'>smancha1231@utexas.edu</a></div>
										<div><b>LinkedIn: </b><a className='a-dark text-decoration-none' target='_blank' href='https://www.linkedin.com/in/ebastian-a-mancha-275229212'>https://www.linkedin.com/in/ebastian-a-mancha-275229212</a></div>
										<div><b>Location:</b> Austin, TX </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home