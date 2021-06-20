import React from 'react'
import styles from '../styles/footer.module.scss'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

const Footer = () => {
	return (
		<footer className={ styles.footer }>
			<Container className={styles.buymeacoffee} fluid>
				<a href="https://www.buymeacoffee.com/dawichi">
					<img
						height="50px"
						width="235px"
						alt="https://www.buymeacoffee.com/dawichi"
						src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=dawichi&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
					/>
				</a>
			</Container>
			<Container>
				<Row className={styles.row}>
					<Col xs={12} sm={6}>
						Site developed by me :) &copy;{" "}
						{new Date().getFullYear().toString()}{" "}
					</Col>
					<Col xs={12} sm={6}>
						Made with <span className={styles.js}>JS</span> and <span className={styles.love}>♥</span> !
					</Col>
				</Row>
			</Container>
		</footer>
	)
}

export default Footer
