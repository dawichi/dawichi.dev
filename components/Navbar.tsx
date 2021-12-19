import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Disclosure, Switch } from '@headlessui/react'

export default function Navbar() {
    const router = useRouter()

    // Navigation menu, selects each section availble
    // add new sections here
    const navigation = [
        {
            name: 'Home',
            url: '/',
            current: router.pathname === '/',
        },
        {
            name: 'Projects',
            url: '/projects',
            current: router.pathname === '/projects',
        },
        {
            name: 'Blog',
            url: '/blog',
            current: router.pathname === '/blog',
        },
    ]

    // DARK MODE
    const [darkMode, setDarkMode] = useState(false)
    const theme = darkMode ? 'dark' : 'light'

    // detects prefgerence
    useEffect(() => {
        // if the user defined anything in the localstorage
        if (localStorage.getItem('theme') === 'dark') {
            setDarkMode(true)
        }
        // if the OS has a dark mode activated
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setDarkMode(true)
        }
    }, [])

    // modifies the mode based on the value of activeTheme
    useEffect(() => {
        document.body.dataset.theme = theme
        if (darkMode) {
            localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
        } else {
            localStorage.setItem('theme', 'light')
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    // END DARK MODE

    return (
        <Disclosure
            as='nav'
            id='navboxshadow'
            className='bg-white/50 dark:bg-zinc-800 sticky top-0 opacity-90 backdrop-blur-xl transition-shadow ease-in-out duration-400 z-10'
        >
            {({ open }) => (
                <>
                    <div className='max-w-7xl mx-auto px-2 sm:px-6 lg:px-8'>
                        <div className='relative flex items-center justify-between h-16'>
                            {/* Mobile menu button*/}
                            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                                    <span className='sr-only'>Open main menu</span>
                                    {open ? <i className='bi bi-x-lg'></i> : <i className='bi bi-list'></i>}
                                </Disclosure.Button>
                            </div>

                            <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                                <div className='flex-shrink-0 flex items-center'>
                                    <h1 className='text-2xl ml-2 tracking-wider'>다 위 치</h1>
                                </div>
                                <div className='hidden sm:block sm:ml-6'>
                                    <div className='flex space-x-4'>
                                        {/* TODO: factorize both menus */}
                                        {navigation.map(item => (
                                            <Link href={item.url}>
                                                <button
                                                    key={item.name}
                                                    className={
                                                        'px-3 py-2 rounded-md text-sm font-bold tracking-widest ' +
                                                        (item.current
                                                            ? 'bg-teal-500 text-white'
                                                            : 'hover:bg-zinc-200 hover:dark:bg-zinc-700')
                                                    }
                                                    aria-current={item.current ? 'page' : undefined}
                                                >
                                                    {item.name}
                                                </button>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='absolute right-0 flex'>
                                <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
                                <div className='flex items-center justify-center ml-10 hidden md:block hover:text-violet-500'>
                                    <a
                                        href='https://github.com/dawichi'
                                        target='_blank'
                                        className='text-2xl'
                                        rel='noreferrer'
                                    >
                                        <i className='bi bi-github'></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className='sm:hidden'>
                        <div className='px-2 pt-2 pb-3 space-y-1'>
                            {navigation.map(item => (
                                <Link href={item.url}>
                                    <button
                                        key={item.name}
                                        className={
                                            'block px-3 py-2 rounded-md text-sm font-bold tracking-widest ' +
                                            (item.current
                                                ? 'bg-teal-500 text-white'
                                                : 'hover:bg-zinc-200 hover:dark:bg-zinc-700')
                                        }
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </button>
                                </Link>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}

// Toggle to switch between dark and light mode
const Toggle = ({ darkMode, setDarkMode }) => {
    return (
        <Switch
            checked={darkMode}
            onChange={setDarkMode}
            className={
                'relative inline-flex flex-shrink-0 h-[34px] w-[58px] border-2 dark:border-transparent border-orange-100 rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 bg-orange-50 dark:bg-zinc-900'
            }
        >
            <span className='sr-only'>Use setting</span>
            <span
                aria-hidden='true'
                className={`${
                    darkMode ? 'translate-x-6 bg-zinc-700' : 'translate-x-0 bg-orange-200'
                } pointer-events-none inline-block h-[30px] w-[30px]
				rounded-full shadow-lg transform ring-0 transition ease-in-out duration-200 flex justify-center items-center`}
            >
                {darkMode ? (
                    <i className='bi bi-moon-fill text-white'></i>
                ) : (
                    <i className='bi bi-sun-fill text-black'></i>
                )}
            </span>
        </Switch>
    )
}
