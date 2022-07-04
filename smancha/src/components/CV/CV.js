import React, { Component } from 'react'
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
				<div className='mobile-pdf justify-content-center'>
					<a className='dark text-decoration-none' href={cv} download='smancha_CV'> Download my CV Here </a>
				</div>
				<object className='pc-pdf' width="100%" height="800" data={cv} type="application/pdf" />
			</div>
		)
	}
}

export default CV