import React, { Component } from 'react'

import Card from '../util/Card'
import './ResearchInterests.css'

class ResearchInterests extends Component {

	constructor() {
		super()

		this.state = {}
	}

	render() {
		return (
			<div className='main'>
				<div className='research-interests row justify-content-center'>
					<div className='col-lg-6'>
						<Card
							title='Syntax'
							text='The basis that generative linguists have been building for decades has given modern day syntacticians a fascinating array of methods for analyzing grammatical phenomena. I happen to think some form of what you might call “Minimalism” is on the right track, both computationally and cognitively (and thus neurobiologically and maybe evolutionarily).'
						/>
						<Card
							title='Parsing and Psycholinguistics'
							text='The human parser can assign complex hierarchical structure to flat strings of auditory/visual input in essentially real time. Isn’t that cool? I think so, and I also think the advances made in theoretical Computer Science and Mathematical Linguistics offer psycholinguists exciting and explicit tools for probing how human minds put grammatical competence to use.'
						/>
						<Card
							title='The Brain'
							text='My bets on where the mind “happens” is the brain, and luckily many other linguistically-minded researchers agree. Because of that, I’m very invested in the Cognitive Neuroscience approach to language, particularly how we can align the representations and computations of Generative Syntax with the neural circuitry of the biological brain. Investigating oscillatory activity seems to be a promising avenue for research, an avenue I’d like to explore.'
						/>
					</div>
				</div>
			</div>
		)
	}
}

export default ResearchInterests