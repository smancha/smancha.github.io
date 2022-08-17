import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './Home.css'

class Home extends Component {

	constructor() {
		super()

		this.state = {
		}
	}

	render() {
		return (
			<div className='main description text-justify dark'>
				<div className='row justify-content-center content'>
					<div className='col-lg-6'>
						<p>Hi, I’m Sebastián Mancha (/seβasˈtjan ˈmant͡ʃa/ or /səbˈæst͡ʃɪn ˈmɑnt͡ʃə/, whichever is easiest), a graduate student in <a className='dark text-decoration-none' href='https://linguistics.umd.edu/' target='_blank'>Linguistics</a> at the University of Maryland, where I’m supported by an NSF Graduate Research Fellowship. I’m advised by <a className='dark text-decoration-none' href='https://ellenlau.net/' target='_blank'> Ellen Lau </a> and <a className='dark text-decoration-none' href='https://www.colinphillips.net/' target='_blank'> Colin Phillips</a>. I did my undergraduate degrees in Linguistics and Spanish/Portuguese at the University of Texas, working with <a className='dark text-decoration-none' href='https://sites.google.com/a/utexas.edu/jbeavers/' target='_blank'>John Beavers</a> and <a className='dark text-decoration-none' href='https://liberalarts.utexas.edu/spanish/faculty/ajt95' target='_blank'> Jacqueline Toribio</a>.</p>
						<p>I’m a big fan of natural language syntax, particularly the myriad ways we can study it, my favorites being formal Generative frameworks, the Cognitive Neuroscience of Language, and computational approaches, and the intersection of all three.</p>
						<p>My heart also belongs in West Texas, and as a proud Tejano from Odessa, Texas, I have a strong attachment to the dialectological work on Spanish in the Southwestern US. In fact, my journey into Linguistics started with a documentary/comparative study of the Spanish spoken in my home community. Check it out under <NavLink className='dark text-decoration-none' to='/projects'> Projects</NavLink>!</p>
						<div className='contact-info text-left'>
							<div>
								<i className="fa fa-envelope icon"></i>
								<b>Email: </b>
								mancha[at]umd.edu
							</div>
							<div>
								<a className='dark text-decoration-none' target='_blank' href='https://www.linkedin.com/in/sebastian-a-mancha-275229212'><i className="fa fa-linkedin icon"></i></a>
								<b>LinkedIn: </b>
								<a className='dark text-decoration-none' target='_blank' href='https://www.linkedin.com/in/sebastian-a-mancha-275229212'>https://www.linkedin.com/in/sebastian-a-mancha-275229212</a>
							</div>
							<div>
								<a className='dark text-decoration-none' target='_blank' href='https://twitter.com/seb_mancha'><i className="fa fa-twitter icon"></i></a>
								<b>Twitter: </b>
								<a className='dark text-decoration-none' target='_blank' href='https://twitter.com/seb_mancha'>https://twitter.com/seb_mancha</a>
							</div>
							<div><i className="fa fa-map-pin icon"></i><b>Location:</b> Austin, TX </div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Home