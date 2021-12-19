import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/global.scss'
import 'tailwindcss/tailwind.css'
import 'animate.css'

import { Navbar } from '../components'

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
                    <div className='dark:bg-zinc-800 p-3'>
                        <div className='container mx-auto flex justify-around'>
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

            <script src='/scripts/navbar_box_shadow.js' type='text/javascript'></script>
        </>
    )
}
