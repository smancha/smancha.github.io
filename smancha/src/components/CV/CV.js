import React, { Component } from 'react'

import Sidebar from '../Sidebar/Sidebar'
import './CV.css'

class CV extends Component {

	constructor() {
		super()

		this.state = {}
	}

	render() {
		return (
			<div className='background container-fluid'>
				<div className='row'>
					<div className='col-sm-4 col-lg-3'>
						<Sidebar />
					</div>
					<div className='col-9'>
						CV
					</div>
				</div>
			</div>
		)
	}
}

export default CV