import React, { Component } from 'react'

import Card from '../util/Card'
import './Projects.css'

class Projects extends Component {

	constructor() {
		super()

		this.state = {}
	}

	render() {
		return (
			<div className='main'>
				<div className='projects row justify-content-center'>
					<div className='col-lg-6'>
						<Card
							title='A Portrait of the Spanish of Ector County'
							text='Inspired by the century-long line of scholarship on the Spanish(es) of New Mexico, I took it upon myself to examine the Spanish spoken in my home community in Ector County, TX. This dialectological survey takes a holistic approach, documenting the phonology, lexicon, and morphosyntax of Spanish speakers in Ector County. I’ve also published a short opinion piece (Mancha 2021, Mellon Mays Undergraduate Journal) on the future of the study of Spanish in Texas, looking to further a sociohistorical approach that acknowledges the history of Tejano communities in the state.'
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default Projects