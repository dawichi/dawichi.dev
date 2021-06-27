import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import styles from '../../styles/about.module.scss'

const Contact = () => {
	return (
		<Container className={styles.container}>
			
			<h4><i className="bi bi-envelope"></i> Get in touch</h4>
			<hr/>
			<p className="my-4">
				Do you wanna contact me? Let me a message right here!
			</p>

			<form action="https://getform.io/f/866900ee-a284-48a0-b031-ab5931937dde" method="POST">
				<Row>
					<Col md={2}></Col>
					<Col md={4}>
						<input className="form-control" type="text" name="name" placeholder="Your name" />
						<br/>
					</Col>
					<Col md={4}>
						<input className="form-control" type="email" name="email" placeholder="your_email@example.com" />
						<br/>
					</Col>
					<Col md={2}></Col>
					
					<Col md={2}></Col>
					<Col md={8}>
						<textarea className="form-control" name="message" placeholder="Leave a message here..." />
						<br/>
					</Col>
					<Col md={2}></Col>
				</Row>
				<button className="btn btn-primary" type="submit" style={{backgroundColor: '#6200ee', borderColor: '#6200ee'}}>Send</button>
			</form>
			
		</Container>
	)
}

export default Contact
