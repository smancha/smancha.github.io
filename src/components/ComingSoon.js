import React, { Component } from 'react'
import { doc, getDoc } from "firebase/firestore";

import { db } from './util/Firebase';

import './ComingSoon.css'

class ComingSoon extends Component {

	constructor() {
		super()

		this.state = {
			email: "",
			linkedin: "",
			twitter: "",
			location: ""
		}

		this.fetchData = this.fetchData.bind(this)
	}

	componentDidMount() {
		this.fetchData()
	}

	async fetchData() {
		await getDoc(doc(db, "personal-information", "smancha"))
			.then((querySnapshot) => {
				const data = querySnapshot.data()
				this.setState(
					{
						email: data.email,
						linkedin: data.linkedin,
						twitter: data.twitter,
						location: data.location.city + ", " + data.location.state
					}
				)
			})
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
						<div className='contact-info text-left'>
							<div>
								<i className="fa fa-envelope icon"></i>
								<b>Email: </b>
								<span className="dark">{this.state.email}</span>
							</div>
							<div>
								<a className='dark text-decoration-none' target='_blank' rel="noreferrer noopener" href={this.state.linkedin}><i className="fa fa-linkedin icon"></i></a>
								<b>LinkedIn: </b>
								<a className='dark' target='_blank' rel="noreferrer noopener" href={this.state.linkedin}>{this.state.linkedin}</a>
							</div>
							<div>
								<a className='dark text-decoration-none' target='_blank' rel="noreferrer noopener" href={this.state.twitter}><i className="fa fa-twitter icon"></i></a>
								<b>Twitter: </b>
								<a className='dark' target='_blank' rel="noreferrer noopener" href={this.state.twitter}>{this.state.twitter}</a>
							</div>
							<div>
								<i className="fa fa-map-pin icon"></i>
								<b>Location: </b>
								<span className='dark'>{this.state.location} </span></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default ComingSoon