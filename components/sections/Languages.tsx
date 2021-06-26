import React from "react"
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import styles from '../../styles/languages.module.scss'

const Languages = () => {

	return (
		<Container className={styles.container}>
			
			<h4><i className="bi bi-globe2"></i> Languages</h4>
			<hr/>
			<p className="my-4">
				I have always been interested in traveling and meeting people from different cultures, so why not try to learn as many languages as possible? After all, if language is the way to interact with other people, a new language grants you new kinds of unique interactions!
			</p>
			
			<Row>
				<Col xs={12} md={6}>
					<img src="../../public/svg/languages.svg" alt="" className={styles.worldSvg} />
				</Col>
				<Col xs={12} md={6}>
					<Container className={styles.bars}>
						<Row>
							<h5>Spanish</h5><br/>
							<div className={styles.progress}>
								<div className={styles.spanish}></div>
							</div>
						</Row>
						<Row>
							<h5>Galician</h5><br/>
							<div className={styles.progress}>
								<div className={styles.galician}></div>
							</div>
						</Row>
						<Row>
							<h5>English</h5><br/>
							<div className={styles.progress}>
								<div className={styles.english}></div>
							</div>
						</Row>
						<Row>
							<h5>German</h5><br/>
							<div className={styles.progress}>
								<div className={styles.german}></div>
							</div>
						</Row>
						<Row>
							<h5>Korean</h5><br/>
							<div className={styles.progress}>
								<div className={styles.korean}></div>
							</div>
						</Row>
					</Container>
				</Col>
			</Row>
		</Container>
	)
}

export default Languages