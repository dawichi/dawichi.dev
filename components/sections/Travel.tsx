import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Map from '../Map'

import styles from '../../styles/languages.module.scss'

const Travel = () => {
	return (			
		<Container className={styles.container}>
			<h4><i className="bi bi-geo-fill"></i> Discovering the world</h4>
			<hr/>
			<Row>
				<p style={{maxWidth: '900px', margin: '30px auto'}}>
					I dream of traveling and knowing as many more countries as possible. I would love to be able to live in different countries throughout my life. Luckily, in software development we have the ability to work from where we want and for whoever we want through the internet. What an amazing job.
				</p>
			</Row>
			<Map/>
		</Container>
	)
}

export default Travel
