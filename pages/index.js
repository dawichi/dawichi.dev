import React from 'react'
import Layout from '../components/Layout'
import About from '../components/sections/About'
import Landing from '../components/sections/Landing'
import Skills from '../components/sections/Skills'
import Languages from '../components/sections/Languages'

const index = () => {
	return (
		<Layout>
			<Landing/>
			<Skills/>
			<About/>
			<Languages/>
		</Layout>
	)
}

export default index
