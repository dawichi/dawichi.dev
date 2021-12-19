import React, { useEffect, useState } from 'react'

const About = () => {
    const [scrolled, setScrolled] = useState(true)

    const handle_scroll = () => {
        const isTop = window.scrollY > 1300 && window.scrollY < 2500
        if (isTop !== scrolled) {
            setScrolled(isTop)
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', handle_scroll)
        return () => document.removeEventListener('scroll', handle_scroll)
    }, [scrolled])

    const setClassName = () => {
        if (scrolled) {
            return 'animate__animated animate__pulse'
        } else {
            return ''
        }
    }

    const tint = (text: string) => <span className='bg-teal-500 p-1 rounded skew-y-6 text-white'>{text}</span>

    const getMyAge = (month: number, year: number) => {
        const date = new Date()
        const currentMonth = date.getMonth() + 1
        const currentYear = date.getFullYear()
        const result = currentMonth - month + (currentYear - year) * 12 + 1
        if (result === 1) return result.toString() + ' month'
        return result.toString() + ' months'
    }

    return (
        <div className='container mx-auto mt-40 p-5'>
            <h2 className='text-2xl text-center my-5'>
                <i className='bi bi-person-fill'></i> About me
            </h2>
            <hr className='bg-zinc-700 dark:bg-zinc-200 border-0 rounded h-1 w-3/4 mx-auto' />
            <div className='grid lg:grid-cols-3 mt-5'>
                <div className={`lg:col-span-2 ${setClassName()}`}>
                    <p>
                        Hi! I'm a <b>software developer</b> based in Galiza (Spain), who works with {tint('JavaScript')}{' '}
                        and {tint('Python')}.
                    </p>
                    <p>
                        My favourite tools are <b className='code re'>React</b> based technologies, as React Native and
                        NEXT.js.
                    </p>
                    <br />

                    <p>
                        I invest my free time in improving myself as a developer and <b>never stop learning</b>.
                    </p>
                    <p>I'm currently studying software engineering in the Universitat Oberta de Catalunya.</p>
                    <br />

                    <p>
                        I try to contribute and publish good <b>open source</b> code, always thinking on what could be
                        useful or interesting for others. I have <b>colaborated with remote developers</b> on small
                        projects for fun, and I believe that being surrounded by the correct people is the best asset to
                        succeed. I'm also fascinated by UI design, so I always try to make any project look it's best in
                        terms of <b>aesthetics and usability</b>.
                    </p>
                </div>
                <div>
                    <img src='/assets/svg/github.svg' className='opacity-90 mx-auto m-5 w-3/4 md:w-full' alt='' />
                </div>
            </div>
        </div>
    )
}

export default About
