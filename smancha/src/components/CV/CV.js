import React, { Component } from 'react'

import Sidebar from '../Sidebar/Sidebar'
import cv from '../../res/smancha_CV.pdf'
import './CV.css'

class CV extends Component {

	constructor() {
		super()

		this.state = {}
	}

	render() {
		return (
			<div className='main'>
				<object width="100%" height="800" data={cv} type="application/pdf" />
			</div>
		)
	}
}

export default CV