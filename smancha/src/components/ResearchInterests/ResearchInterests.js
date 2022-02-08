import React, { Component } from 'react'

import Sidebar from '../Sidebar/Sidebar'
import './ResearchInterests.css'

class ResearchInterests extends Component {

	constructor() {
		super()

		this.state = {}
	}

	render() {
		return (
			<div className='background container-fluid'>
				<div className='row'>
					<div className='sidebar-background col-sm-4 col-lg-3'>
						<Sidebar />
					</div>
					<div className='col-sm-8 col-lg-9'>
						research interests
					</div>
				</div>
			</div>
		)
	}
}

export default ResearchInterests