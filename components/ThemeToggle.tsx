import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'

import styles from '../styles/themetoggle.module.scss'


export default function ThemeToggle() {

	const [activeTheme, setActiveTheme] = useState('light')
	const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light'

	useEffect(() => {
		if (localStorage.getItem('theme') === 'dark') {
			setActiveTheme('dark')
		}
	}, [])

	useEffect(() => {
		document.body.dataset.theme = activeTheme
		activeTheme === 'light'
			? localStorage.setItem('theme', 'light')
			: localStorage.setItem('theme', 'dark')
	}, [activeTheme])

	return (
		<Button variant="none"
			className={styles.button}
			onClick={() => setActiveTheme(inactiveTheme)}
		>
			{ activeTheme === 'light' ? <i className="bi bi-moon-fill"></i> : <i className="bi bi-brightness-high-fill"></i> }
		</Button>
	)
}
