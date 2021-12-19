import React from 'react'
import { About, Contact, Landing, Languages, Skills, Timeline, Travel } from '../components'
const index = () => {
    return (
        <div className='animate__animated animate__fadeIn animate__faster'>
            <Landing />
            <Skills />
            <About />
            <Timeline />
            <Languages />
            <Travel />
            <Contact />
        </div>
    )
}

export default index
