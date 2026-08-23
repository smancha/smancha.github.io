import React, { Component } from 'react'

import Card from '../util/Card/Card'
import { parseMarkdownSections } from '../util/parseMarkdownSections'
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
		const response = await fetch(`${process.env.PUBLIC_URL}/content/research-interests.md`)
		const markdown = await response.text()
		this.setState({ researchInterests: parseMarkdownSections(markdown) })
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
				<div className='research-interests row justify-content-center '>
					<div className='content d-flex flex-column justify-content-center col-lg-6'>
						{researchInterestCards}
					</div>
				</div>
			</div>
		)
	}
}

export default ResearchInterests
