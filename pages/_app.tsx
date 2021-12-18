import type { AppProps } from 'next/app'
import Head from 'next/head'
import '../styles/global.scss'
import 'tailwindcss/tailwind.css'
import 'animate.css'

import { Footer, Navbar } from '../components'

export default function MyApp({ Component, pageProps }: AppProps) {

	return (
		<>
			<Head>
				<title>Dawichi - software developer</title>
				<link rel="icon" href="/favicon.ico" />
				<meta name="description" content='My personal website!' />
				{/* Bootstrap & Icons */}
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css"/>
			</Head>

			<div className='bg-amber-50 text-zinc-900 dark:text-white dark:bg-zinc-900'>
				<Navbar/>
				<main>
					<Component {...pageProps} />
				</main>
				<Footer/>
			</div>
			
			<script src="/scripts/navbar_box_shadow.js" type="text/javascript"></script>
		</>
	)
}
