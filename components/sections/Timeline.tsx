import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


import styles from '../../styles/timeline.module.scss'

const Timeline = () => {

	const getMonthsWorking = (month: number, year: number) => {
		const date = new Date()
		const currentMonth = date.getMonth()+1
		const currentYear = date.getFullYear()
		const result = (currentMonth - month) + ((currentYear - year) * 12) + 1
		if (result === 1)
			return result.toString() + ' month'
		return result.toString() + ' months'
	}

	return (
		<Container className={styles.container}>
			<h4><i className="bi bi-bezier2"></i> Timeline</h4>
			<hr/>
			<br/>

			<Row>
				<Col xs={12} md={6}>
					<img src="/assets/svg/workalone.svg" alt="" className={styles.image} />
				</Col>
				<Col xs={12} lg={6}>
					<h4>Experience</h4>
					<ul>
						<li data-date="Nov 21 - now">
							<h5>Backend Engineer</h5>
							<p><a href="https://bizaway.com" target="_blank">Bizaway</a> - {getMonthsWorking(11, 2021)}</p>
						</li>
						<li data-date="Dec 20 - Nov 21">
							<h5>Junior Frontend Developer</h5>
							<p><a href="https://dosespacios.com" target="_blank">Dos Espacios</a> - 11 months</p>
						</li>
						<li data-date="Sep 20 - Dec 20">
							<h5>Sysadmin internship</h5>
							<p><a href="https://www.nubodata.com" target="_blank">Nubodata</a> - 4 months</p>
						</li>
						<li data-date="2017 - 2019">
							<h5>Summer non-tech jobs</h5>
							<p>as waiter, storekeeper...</p>
						</li>
					</ul>
					<br></br>
				</Col>
				<Col xs={12} md={6}>
					<h4>Studies</h4>
					<ul>
						<li data-date="2021 - now">
							<h5>Degree in Telecommunication Technologies Engineering</h5>
							<p>Uvigo - Vigo University</p>
						</li>
						<li data-date="2017 - 2020">
							<h5>Technician in Computer Systems Administration</h5>
							<p>I.E.S. Armando Cotarelo Valledor</p>
						</li>
						<li data-date="2015 - 2017">
							<h5>European baccalaureate</h5>
							<p>I.E.S. Castro Alobre</p>
						</li>
					</ul>
				</Col>
				<Col xs={12} md={6}>
					<img src="/assets/svg/study.svg" alt="" className={styles.image} />
				</Col>
			</Row>
		</Container>
	)
}

export default Timeline
