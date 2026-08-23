import React, { Component } from 'react'

import Card from '../util/Card/Card'
import { parseMarkdownSections } from '../util/parseMarkdownSections'
import './Projects.css'

class Projects extends Component {

	constructor() {
		super()

		this.state = {
			projects: []
		}

		this.fetchProjects = this.fetchProjects.bind(this)
	}

	componentDidMount() {
		this.fetchProjects()
	}

	async fetchProjects() {
		const response = await fetch(`${process.env.PUBLIC_URL}/content/projects.md`)
		const markdown = await response.text()
		this.setState({ projects: parseMarkdownSections(markdown) })
	}

	render() {
		const projectCards = this.state.projects.map(p => {
			return (
				<Card
					title={p.title}
					text={p.description}>
				</Card>
			)
		})

		return (
			<div className='main'>
				<div className='projects row justify-content-center '>
					<div className='content d-flex flex-column justify-content-center col-lg-6'>
						{projectCards}
					</div>
				</div>
			</div>
		)
	}
}

export default Projects