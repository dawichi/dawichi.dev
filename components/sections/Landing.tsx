import React from 'react'
import Container from 'react-bootstrap/Container'

import styles from '../../styles/landing.module.scss'

const Landing = () => {

	return (
		<Container fluid className={styles.landing} >
			<h1>
				<span className="animate__animated animate__backInDown">Hi all <i className="bi bi-suit-heart-fill"></i></span>
				<br/>
				<span className="animate__animated animate__lightSpeedInLeft">I am&nbsp;</span>
				<span className="animate__animated animate__jackInTheBox">Dawichi, </span>
				<br/>
				<span className="animate__animated animate__rollIn">software&nbsp;</span>
				<span className="animate__animated animate__rotateInUpRight">developer</span>
				<br/>
				<a target="_blank" rel="noreferrer" href="https://github.com/dawichi">
					<span className="animate__animated animate__rollIn animate__delay-1s animate__fast">
						<i className="bi bi-github"></i>
					</span>
				</a>
				<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/dawichi/">
					<span className="animate__animated animate__rollIn animate__delay-1s">
						<i className="bi bi-linkedin"></i>
					</span>
				</a>
				<a target="_blank" rel="noreferrer" href="https://twitter.com/dawichi_">
					<span className="animate__animated animate__rollIn animate__delay-1s animate__slow">
						<i className="bi bi-twitter"></i>
					</span>
				</a>
			</h1>
			
			<div className={styles.arrow}>
				<svg className="animate__animated animate__backInUp animated" version="1.1" width="80px" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 451.847 451.847"><g><path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751 c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0 c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"></path></g></svg>
			</div>

			<div className={styles.svgs}>
				<img src="../../public/svg/dev-app.svg" className={styles.webDev} alt=""/>
				<img src="../../public/svg/dev-app.svg" className={styles.appDev} alt=""/>
			</div>
			
		</Container>
	)
}

export default Landing