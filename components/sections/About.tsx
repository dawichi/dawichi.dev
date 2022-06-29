import { useEffect, useState } from 'react'

const About = () => {
    const [scrolled, setScrolled] = useState(true)

    useEffect(() => {
        const handle_scroll = () => {
            const isTop = window.scrollY > 1300 && window.scrollY < 2500
            if (isTop !== scrolled) {
                setScrolled(isTop)
            }
        }
        document.addEventListener('scroll', handle_scroll)

        return () => document.removeEventListener('scroll', handle_scroll)
    }, [scrolled])

    const setClassName = () => {
        if (!scrolled) {
            return ''
        }

        return 'animate__animated animate__pulse'
    }

    const tint = (text: string) => <span className='skew-y-6 rounded bg-teal-500 p-1 text-white'>{text}</span>

    // For future use
    // eslint-disable-next-line no-unused-vars
    const getMyAge = (month: number, year: number) => {
        const date = new Date()
        const currentMonth = date.getMonth() + 1
        const currentYear = date.getFullYear()
        const result = currentMonth - month + (currentYear - year) * 12 + 1

        return result.toString() + ' month' + (result > 1 ? 's' : '')
    }

    return (
        <div className='container mx-auto mt-40 p-5'>
            <h2 className='my-5 text-center text-2xl'>
                <i className='bi bi-person-fill'></i> About me
            </h2>
            <hr className='mx-auto h-1 w-3/4 rounded border-0 bg-zinc-700 dark:bg-zinc-200' />
            <div className='mt-5 grid lg:grid-cols-3'>
                <div className={`lg:col-span-2 ${setClassName()}`}>
                    <p>
                        Hi! I&apos;m David, a <b>software engineer</b> based in Spain with +2 years of experience
                        creating stuff.
                    </p>
                    <br />

                    <p>
                        I work mainly with {tint('JavaScript')} (specially <span title='TypeScript'>{tint('TS')}</span>
                        ), but I love {tint('Python')} for specific tasks.
                    </p>
                    <p>
                        My favourite tools are <b>NestJS</b> for Backend and <b>React</b> (NextJS) based technologies
                        for frontend.
                    </p>
                    <br />

                    <p>Also, eventually I have done small projects with other tools such as Java, PHP and C#.</p>
                    <br />

                    <p>
                        I invest my free time in improving myself as a developer and <b>never stop learning</b>.
                    </p>
                    <p>
                        I&apos;m currently studying the engineering, but I really love <b>Freecodecamp</b> and{' '}
                        <b>Platzi</b>.
                    </p>
                    <br />

                    <p>
                        I try to contribute and publish good <b>open source</b> code, always thinking on what could be
                        useful or interesting for others. I have <b>colaborated with remote developers</b> on side
                        projects for fun, and I believe that being surrounded by the correct people is the best asset to
                        succeed. I&apos;m also fascinated by UI design, so I always try to make any project look
                        it&apos;s best in terms of <b>aesthetics and usability</b>.
                    </p>
                </div>
                <div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src='/assets/svg/github.svg' className='m-5 mx-auto w-3/4 opacity-90 md:w-full' alt='' />
                </div>
            </div>
        </div>
    )
}

export default About
