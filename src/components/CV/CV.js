import React from 'react'

import './CV.css'

const cvUrl = `${process.env.PUBLIC_URL}/content/smancha_cv.pdf`

function CV() {
	return (
		<div className='main'>
			<div className='mobile-pdf text-center justify-content-center'>
				<a className='dark text-decoration-none ' href={cvUrl} download='smancha_CV'> Download my CV Here </a>
			</div>
			<iframe id='cv' title='smancha_cv' className='pc-pdf' width="100%" height="800" src={cvUrl}></iframe>
		</div>
	)
}

export default CV
