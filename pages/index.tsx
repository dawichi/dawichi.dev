import { About, Contact, Landing, Languages, Skills, Timeline, Travel } from '../components'

const Index = () => {
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

export default Index
