import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import Contacts from '../util/Contacts';
import './Home.css'

class Home extends Component {

	constructor() {
		super()
	}

	render() {
		return (
			<div className='main text-justify dark'>
				<div className='row description justify-content-center'>
					<div className='content d-flex flex-column justify-content-center align-content-center col-lg-6'>
						<p>Hi, I’m Sebastián Mancha (/seβasˈtjan ˈmant͡ʃa/ or /səbˈæst͡ʃɪn ˈmɑnt͡ʃə/, whichever is easiest), a graduate student in <a className='dark' href='https://linguistics.umd.edu/' target='_blank' rel="noreferrer noopener">Linguistics</a> at the University of Maryland, where I’m supported by an NSF Graduate Research Fellowship. I’m advised by <a className='dark' href='https://ellenlau.net/' target='_blank' rel="noreferrer noopener"> Ellen Lau</a> and <a className='dark' href='https://www.colinphillips.net/' target='_blank' rel="noreferrer noopener"> Colin Phillips</a>. I did my undergraduate degrees in Linguistics and Spanish/Portuguese at the University of Texas, working with <a className='dark' href='https://sites.google.com/a/utexas.edu/jbeavers/' target='_blank' rel="noreferrer noopener">John Beavers</a> and <a className='dark' href='https://liberalarts.utexas.edu/spanish/faculty/ajt95' target='_blank' rel="noreferrer noopener"> Jacqueline Toribio</a>.</p>
						<p>I’m a big fan of natural language syntax, particularly the myriad ways we can study it, my favorites being formal Generative frameworks, the Cognitive Neuroscience of Language, and computational approaches, and the intersection of all three.</p>
						<p>My heart also belongs in West Texas, and as a proud Tejano from Odessa, Texas, I have a strong attachment to the dialectological work on Spanish in the Southwestern US. In fact, my journey into Linguistics started with a documentary/comparative study of the Spanish spoken in my home community. Check it out under <NavLink className='dark' to='/projects'> Projects</NavLink>!</p>
						<Contacts />
					</div>
				</div>
			</div>
		)
	}
}

export default Home