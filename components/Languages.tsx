import React from 'react'
import { styles } from '../styles/styles.config'

const Languages = () => {

	interface lang {
		name: string,
		progress: number,
		flag: string,
	}
	const langs = [
		{
			name: 'Spanish (native)',
			progress: 100,
			flag: 'https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png'
		},
		{
			name: 'Galician (native)',
			progress: 100,
			flag: '/assets/img/galiza_flag.jpg',
		},
		{
			name: 'English',
			progress: 95,
			flag: 'https://www.countryflags.com/wp-content/uploads/united-states-of-america-flag-png-large.png',
		},
		{
			name: 'German',
			progress: 35,
			flag: 'https://www.countryflags.com/wp-content/uploads/germany-flag-png-large.png',
		},
		{
			name: 'Korean',
			progress: 10,
			flag: 'https://www.countryflags.com/wp-content/uploads/south-korea-flag-png-large.png',
		},
	]

	const Lang = ({langs}) => (
		<div>
			<ul className='grid xl:grid-cols-2'>
				{langs.map((lang:lang, idx:number) => (
					<li key={idx} className={'rounded m-3 p-5 ' + styles.card}>
						<img className='inline w-8 m-1 border' src={lang.flag}/>
						<span>{lang.name}</span>
						<div className='bg-zinc-200 dark:bg-zinc-700 h-2 rounded'>
							<div className='bg-teal-500 h-2 rounded' style={{width: `${lang.progress}%`}}></div>
						</div>
					</li>
				))
				}
			</ul>
		</div>
	)

	return (
		<div className='container mx-auto mt-40 p-5'>
			<h2 className="text-2xl text-center my-5"><i className="bi bi-globe2"></i> Languages</h2>
			<hr className='bg-zinc-700 dark:bg-zinc-200 border-0 rounded h-1 w-3/4 mx-auto'/>
			<div className='grid lg:grid-cols-3 mt-5'></div>
			
			<p className="max-w-5xl mx-auto text-center">
				I have always been interested in traveling and meeting people from different cultures, so why not try to learn as many languages as possible? After all, if language is the way to interact with other people, a new language grants you new kinds of unique interactions!
			</p>
			
			<div className='grid md:grid-cols-2 mt-10'>
				<div><img src="/assets/svg/languages.svg" alt="" className='opacity-90 mx-auto m-5 w-3/5'/></div>
				<Lang langs={langs} />
			</div>
		</div>
	)
}

export default Languages