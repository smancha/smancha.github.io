import React, { Component } from 'react'

import Contacts from './util/Contacts';
import './ComingSoon.css'

class ComingSoon extends Component {

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
						<Contacts />
					</div>
				</div>
			</div>
		)
	}
}

export default ComingSoon