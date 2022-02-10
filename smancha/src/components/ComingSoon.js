import React, { Component } from 'react'

class ComingSoon extends Component {

	constructor() {
		super()

		this.state = {}
	}

	render() {
		return (
			<div className='background container-fluid'>
				<div className='text-center justify-content-center row' style={{ position: 'relative', top: '20vh', color: '#CCCCCC' }}>
					<div className='col-6'>
						<div className='text-uppercase display-1'>
							This website is coming soon.
						</div>
						<div className='contact-info text-left' style={{ margin: '40px'}}>
							<div><b>Email: </b><a className='a-dark text-decoration-none' target='_blank' href='mailto:smancha1231@utexas.edu'>smancha1231@utexas.edu</a></div>
							<div><b>LinkedIn: </b><a className='a-dark text-decoration-none' target='_blank' href='https://www.linkedin.com/in/ebastian-a-mancha-275229212'>https://www.linkedin.com/in/ebastian-a-mancha-275229212</a></div>
							<div><b>Location:</b> Austin, TX </div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ComingSoon