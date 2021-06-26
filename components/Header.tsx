import React from 'react'
import Link from 'next/link'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import styles from '../styles/header.module.scss'
import ThemeToggle from './ThemeToggle'

const Header = () => {
	return (
		<Navbar collapseOnSelect expand="lg" sticky="top"  id="navboxshadow" className={styles.nav}>
			<Navbar.Brand><b>다 위 치</b></Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto ml-auto">
					<Link href="/">Home</Link>
					<Link href="/projects">Projects</Link>
				</Nav>
				<Nav>
					<ThemeToggle/>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Header
