import React, { useEffect, useState } from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import styles from '../../styles/about.module.scss'

const About = () => {
	
	const [scrolled, setScrolled] = useState(true)

	useEffect(() => {
		document.addEventListener('scroll', () => {
			const isTop = window.scrollY > 1300 && window.scrollY < 2500
			if (isTop !== scrolled) { setScrolled(isTop)}
		})
	}, [scrolled])

	const setClassName = () => {
		if (scrolled) {
			return "animate__animated animate__pulse"
		} else {
			return ""
		}
	}

	return (
		<Container className={styles.container}>
			
			<h4 className="text"><i className="bi bi-person-fill"></i> About me</h4>
			<hr/>
			
			<Row>
				<Col xs={12} lg={7}>
					<div className={styles.text}>
						<p className={setClassName()}>
							Hello! I'm a <b>software developer</b> who works with <b className="code js">JS</b> and <b className="code py">Python</b>. My favourite tools are <b className="code re">React</b> based technologies, as React Native and NEXT.js.
						</p>
						<p className={setClassName()}>
							I invest my free time in continuing to improve myself as a developer and <b>never stop learning</b>. I'm currently studying in <a href="https://www.freecodecamp.org/" target="_blank">freecodecamp</a>, getting better in python.
						</p>
						<p  className={setClassName()}>
							I try to contribute and publish good <b>open source</b> code, always thinking on what could be useful or interesting for others. I have <b>colaborated with remote developers</b> on small projects for fun, and I believe that being surrounded by a good team is the best asset to succeed. I'm also fascinated by UI design, so I always try to make any project look it's best in terms of <b>aesthetics and usability</b>.
						</p>
					</div>
				</Col>
				<Col xs={12} lg={5}>
					<img src="../../public/svg/github.svg" className={styles.meSvg} alt=""/>
				</Col>
			</Row>
		</Container>
	)
}

export default About