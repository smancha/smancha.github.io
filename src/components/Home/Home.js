import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import Contacts from '../util/Contacts';
import './Home.css'

class Home extends Component {

	render() {
		return (
			<div className='main text-justify dark'>
				<div className='row description justify-content-center'>
					<div className='content d-flex flex-column justify-content-center align-content-center col-lg-6'>
						<p>Hi, I’m Sebastián Mancha (/seβasˈtjan ˈmant͡ʃa/ or /səbˈæst͡ʃɪn ˈmɑnt͡ʃə/, whichever is easiest), a 4th year graduate student in <a className='dark' href='https://linguistics.umd.edu/' target='_blank' rel="noreferrer noopener">Linguistics</a> at the University of Maryland, where I’m supported by an NSF Graduate Research Fellowship. I’m advised by <a className='dark' href='https://ellenlau.net/' target='_blank' rel="noreferrer noopener"> Ellen Lau</a> and <a className='dark' href='https://www.colinphillips.net/' target='_blank' rel="noreferrer noopener"> Colin Phillips</a>. I did my undergraduate degrees in Linguistics and Spanish/Portuguese at the University of Texas, working with <a className='dark' href='https://sites.google.com/a/utexas.edu/jbeavers/' target='_blank' rel="noreferrer noopener">John Beavers</a> and <a className='dark' href='https://liberalarts.utexas.edu/spanish/faculty/ajt95' target='_blank' rel="noreferrer noopener"> Jacqueline Toribio</a>.</p>
						<p>Broadly, I study sentence memory and sentence production. I (try to) pull on threads from work on structural priming, grammatical encoding, verbal working memory, and episodic memory to understand when and why language users manage to build robust memory traces of sentence structures, as well as the natural data structure of those traces. I'm happy to approach these questions from cognitive, computational, and neural angles.</p>
						<p>In a past life I studied the dialectology of the Spanish of the southwestern US, a subject close to my Tejano heart. US. In fact, my journey into Linguistics started with a documentary/comparative study of the Spanish spoken in my home community in Odessa, TX. Check it out under <NavLink className='dark' to='/projects'> Projects</NavLink>!.</p>
						<p>If you're a hispanic scholar interested in pursuing psycho/neurolinguistics and have questions about the field, don't hesitate to get in touch!</p>
						<Contacts />
					</div>
				</div>
			</div>
		)
	}
}

export default Home