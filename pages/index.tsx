import React from 'react'
import Layout from '../components/Layout'
import About from '../components/sections/About'
import Landing from '../components/sections/Landing'
import Languages from '../components/sections/Languages'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import Timeline from '../components/sections/Timeline'
import Travel from '../components/sections/Travel'
import Contact from '../components/sections/Contact'

const index = () => {
	return (
		<Layout>
			<Landing/>
			<Skills/>
			<About/>
			<Timeline/>
			<Languages/>
			<Travel/>
			<Contact/>
			{/* <Projects/> */}
		</Layout>
	)
}

export default index
