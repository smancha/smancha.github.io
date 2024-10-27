import React, { Component } from 'react'

import './ComingSoon.css'

class ComingSoon extends Component {

	constructor() {
		super()

		this.state = {}
	}

	render() {
		return (
			<div className='background container-fluid'>
				<div className='text-left justify-content-center row dark' style={{ position: 'relative', top: '20vh' }}>
					<div className='col-6'>
						<div className='text-uppercase display-1'>
							This page is
						</div>
						<div className='text-uppercase display-1'>
							coming soon<span class="ellipsis-anim"><span>.</span><span>.</span><span>.</span></span>
						</div>
						<div className='contact-info text-left' style={{ margin: '40px' }}>
							<div><b>Email: </b><a className='dark text-decoration-none' target='_blank' href='mailto:smancha1231@utexas.edu'>smancha1231@utexas.edu</a></div>
							<div><b>LinkedIn: </b><a className='dark text-decoration-none' target='_blank' href='https://www.linkedin.com/in/sebastian-a-mancha-275229212'>https://www.linkedin.com/in/sebastian-a-mancha-275229212</a></div>
							<div><b>Location:</b> Washington, DC </div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ComingSoon