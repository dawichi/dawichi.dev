import type { AppProps } from 'next/app'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import 'tailwindcss/tailwind.css'
import 'animate.css'

import { Navbar } from 'components'
import 'styles/global.scss'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>
                <title>Dawichi - software developer</title>
                <link rel='icon' href='/favicon.ico' />
                <meta name='description' content='My personal website!' />
                {/* Bootstrap & Icons */}
                <link
                    rel='stylesheet'
                    href='https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css'
                />
            </Head>

            <div className='bg-amber-50 text-zinc-900 dark:text-white dark:bg-zinc-900'>
                <Navbar />
                <main>
                    <Component {...pageProps} />
                </main>

                <footer className='bg-white/50 dark:bg-zinc-800'>
                    <div className='flex justify-center items-center'>
                        <a href='https://www.buymeacoffee.com/dawichi' target='_blank' rel='noreferrer'>
                            <div className='w-64 h-24 relative'>
                                <Image
                                    alt='buymeacoffee'
                                    src='https://img.buymeacoffee.com/button-api/?text=Buy%20me%20a%20coffee&emoji=&slug=dawichi&button_colour=14b8a6&font_colour=ffffff&font_family=Cookie&outline_colour=000000&coffee_colour=FFDD00'
                                    layout='fill'
                                />
                            </div>
                        </a>
                    </div>
                    <div className='dark:bg-zinc-800 p-3'>
                        <div className='container mx-auto grid lg:grid-cols-2 text-center'>
                            <div>
                                <span>Site developed by me! ^^ &copy; {new Date().getFullYear().toString()} </span>
                            </div>
                            <div>
                                Made with <span className='bg-yellow-300 dark:bg-yellow-500 p-1 rounded'>JS</span> and{' '}
                                <span className='text-red-600'>♥</span> !
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

            <Script src='/scripts/navbar_box_shadow.js' />
        </>
    )
}
