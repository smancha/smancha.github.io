import React, { Component } from 'react'

import Sidebar from '../Sidebar/Sidebar'
import './Home.css'

class Home extends Component {

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
						home
					</div>
				</div>
			</div>
		)
	}
}

export default Home