import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import Sidebar from '../Sidebar/Sidebar'
import './Home.css'

class Home extends Component {

	constructor() {
		super()

		this.state = {
		}
	}

	render() {
		return (
			<div className='background container-fluid'>
				<div className='row'>
					<div className='col-xs-6 col-sm-4 col-lg-3 p-0'>
						<Sidebar />
					</div>
					<div className='col-xs-6 col-sm-8 col-lg-9'>
						<div className='description text-justify container dark'>
							<div className='row justify-content-center'>
								<div className='col-lg-6'>
									<p>Hi, I’m Sebastián Mancha (/seβasˈtjan ˈmant͡ʃa/ or /səbˈæst͡ʃɪn ˈmɑnt͡ʃə/, whichever is easiest) a current undergraduate student in <a className='dark text-decoration-none' href='https://liberalarts.utexas.edu/linguistics/' target='_blank'>Linguistics</a> and <a className='dark text-decoration-none' href='https://liberalarts.utexas.edu/spanish/' target='_blank'>Spanish/Portuguese</a> at the University of Texas Austin, and hopefully Linguistics PhD student in Fall 2022. I’m also a trainee in <a className='dark text-decoration-none' href='https://liberalarts.utexas.edu/linguistics/faculty/fl5869' target='_blank'>Dr. Fernando Llanos Lucas</a>’ Neurolinguistics lab.</p>
									<p>I’m a big fan of natural language syntax, particularly the myriad ways we can study it, my favorites being formal Generative frameworks, the Cognitive Neuroscience of Language, and computational approaches, and the intersection of all three!</p>
									<p>My heart also belongs in West Texas, and as a proud Tejano from Odessa, Texas, I have a strong attachment to the dialectological work on Spanish in the Southwestern US. In fact, my journey into Linguistics started with a documentary/comparative study of the Spanish spoken in my home community. Check it out under <NavLink className='dark text-decoration-none' to='/projects'> Projects</NavLink> !</p>
									<div className='contact-info text-left'>
										<div><b>Email: </b><a className='dark text-decoration-none' target='_blank' href='mailto:smancha1231@utexas.edu'>smancha1231@utexas.edu</a></div>
										<div><b>LinkedIn: </b><a className='dark text-decoration-none' target='_blank' href='https://www.linkedin.com/in/sebastian-a-mancha-275229212'>https://www.linkedin.com/in/sebastian-a-mancha-275229212</a></div>
										<div><b>Location:</b> Austin, TX </div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home