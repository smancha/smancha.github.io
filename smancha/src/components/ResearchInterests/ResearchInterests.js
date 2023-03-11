import React, { Component } from 'react'
import { collection, getDocs } from 'firebase/firestore'

import { db } from '../util/Firebase';
import Card from '../util//Card/Card'
import './ResearchInterests.css'

class ResearchInterests extends Component {

	constructor() {
		super()

		this.state = {
			researchInterests: []
		}
		
		this.fetchResearchInterests = this.fetchResearchInterests.bind(this)
	}

	componentDidMount() {
		this.fetchResearchInterests()
	}

	async fetchResearchInterests() {
		await getDocs(collection(db, "research-interests",))
			.then((querySnapshot) => {
				const data = querySnapshot.docs
					.map((doc) => ({ ...doc.data(), id: doc.id }))
				this.setState({ researchInterests: data })
			})
	}


	render() {
		const researchInterestCards = this.state.researchInterests.map(r => {
			return (
				<Card
					title={r.title}
					text={r.description}>
				</Card>
			)
		})

		return (
			<div className='main'>
				<div className='research-interests row justify-content-center content'>
					<div className='col-lg-6'>
						{researchInterestCards}
					</div>
				</div>
			</div>
		)
	}
}

export default ResearchInterests