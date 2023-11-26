import React, { Component } from 'react'
import { ref, getDownloadURL } from "firebase/storage";

import { storage } from '../util/Firebase';
import './CV.css'

class CV extends Component {

	constructor() {
		super()

		this.state = { cvUrl: "" }

		this.getCV = this.getCV.bind(this)
	}

	componentDidMount() {
		this.getCV()
	}

	async getCV() {
		getDownloadURL(ref(storage, 'smancha_CV.pdf'))
			.then((url) => {
				const cv = document.getElementById('cv');
				cv.setAttribute('src', url);

				this.setState({
					cvUrl: url
				})
			})
	}

	render() {
		return (
			<div className='main'>
				<div className='mobile-pdf text-center justify-content-center'>
					<a className='dark text-decoration-none ' href={this.state.cvUrl} download='smancha_CV'> Download my CV Here </a>
				</div>
				<iframe id='cv' title='smancha_cv' className='pc-pdf' width="100%" height="800"></iframe>
			</div>
		)
	}
}

export default CV