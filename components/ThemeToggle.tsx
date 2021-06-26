import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'

import styles from '../styles/themetoggle.module.scss'


const ThemeToggle = () => {

	const [activeTheme, setActiveTheme] = useState('light')
	const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light'

	useEffect(() => {
		document.body.dataset.theme = activeTheme
	}, [activeTheme])

	return (
		<Button variant="none"
			className={styles.button}
			onClick={() => setActiveTheme(inactiveTheme)}
		>
			{ activeTheme === 'light' ? <i className="bi bi-moon-fill"></i> : <i className="bi bi-brightness-high-fill"></i> }
		</Button>
	);
};

export default ThemeToggle;