import React from 'react'
import Navbar from './Header'
import Footer from './Footer'

const Layout: React.FC = ({ children }) => {
	return (
		<>
			<Navbar/>
			<main>{ children }</main>
			<Footer/>
		</>
	)
}

export default Layout
