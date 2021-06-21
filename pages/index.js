import React from 'react'
import Layout from '../components/Layout'
import About from '../components/sections/About'
import Landing from '../components/sections/Landing'
import Skills from '../components/sections/Skills'

const index = () => {
	return (
		<Layout>
			<Landing/>
			<Skills/>
			<About/>
		</Layout>
	)
}

export default index
