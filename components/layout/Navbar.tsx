import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Disclosure, Switch } from '@headlessui/react'

export default function Navbar() {
    const router = useRouter()

    // Navigation menu, selects each section availble
    // add new sections here
    interface item {
        name: string
        url: string
        current: boolean
    }

    const navigation: item[] = [
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

    // detects preference
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
        const theme = darkMode ? 'dark' : 'light'
        document.body.dataset.theme = theme
        if (darkMode) {
            localStorage.setItem('theme', 'dark')
            document.documentElement.classList.add('dark')
        } else {
            localStorage.setItem('theme', 'light')
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])

    // Toggle to switch between dark and light mode
    const Toggle = ({
        darkMode,
        setDarkMode,
    }: {
        darkMode: boolean
        setDarkMode: Dispatch<SetStateAction<boolean>>
    }) => (
        <Switch
            checked={darkMode}
            onChange={setDarkMode}
            className={
                'relative inline-flex h-[34px] w-[58px] flex-shrink-0 cursor-pointer rounded-full border-2 border-orange-100 bg-orange-50 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 dark:border-transparent dark:bg-zinc-900'
            }
        >
            <span className='sr-only'>Use setting</span>
            <span
                aria-hidden='true'
                className={`${
                    darkMode ? 'translate-x-6 bg-zinc-700' : 'translate-x-0 bg-orange-200'
                } pointer-events-none inline-block flex h-[30px]
				w-[30px] transform items-center justify-center rounded-full shadow-lg ring-0 transition duration-200 ease-in-out`}
            >
                {darkMode ? (
                    <i className='bi bi-moon-fill text-white'></i>
                ) : (
                    <i className='bi bi-sun-fill text-black'></i>
                )}
            </span>
        </Switch>
    )

    return (
        <Disclosure
            as='nav'
            id='navboxshadow'
            className='duration-400 sticky top-0 z-10 bg-white/50 opacity-90 backdrop-blur-xl transition-shadow ease-in-out dark:bg-zinc-800'
        >
            {({ open }) => (
                <>
                    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
                        <div className='relative flex h-16 items-center justify-between'>
                            {/* Mobile menu button*/}
                            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                                <Disclosure.Button className='inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-zinc-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                                    <span className='sr-only'>Open main menu</span>
                                    {open ? <i className='bi bi-x-lg'></i> : <i className='bi bi-list'></i>}
                                </Disclosure.Button>
                            </div>

                            <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
                                <div className='flex flex-shrink-0 items-center'>
                                    <h1 className='ml-2 text-2xl tracking-wider'>다 위 치</h1>
                                </div>
                                <div className='hidden sm:ml-6 sm:block'>
                                    <div className='flex space-x-4'>
                                        {/* TODO: factorize both menus */}
                                        {navigation.map((item: item, idx: number) => (
                                            <Link href={item.url} key={idx} passHref>
                                                <button
                                                    key={item.name}
                                                    className={
                                                        'rounded-md px-3 py-2 text-sm font-bold tracking-widest ' +
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
                                <div className='ml-10 flex hidden items-center justify-center hover:text-teal-500 md:block'>
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
                        <div className='space-y-1 px-2 pt-2 pb-3'>
                            {navigation.map((item: item, idx: number) => (
                                <Link href={item.url} key={idx} passHref>
                                    <button
                                        key={item.name}
                                        className={
                                            'block rounded-md px-3 py-2 text-sm font-bold tracking-widest ' +
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
