/* eslint-disable @next/next/no-img-element */
import { styles } from 'styles/styles.config'

const Languages = () => {
    interface lang {
        name: string
        progress: number
        flag: string
    }
    const langs = [
        {
            name: 'Spanish (native)',
            progress: 100,
            flag: 'https://www.countryflags.com/wp-content/uploads/spain-flag-png-large.png',
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

    const Lang = ({ langs }: { langs: lang[] }) => (
        <div>
            <ul className='grid xl:grid-cols-2'>
                {langs.map((lang: lang, idx: number) => (
                    <li key={idx} className={'m-3 rounded p-5 ' + styles.card}>
                        <img className='m-1 inline w-8 border' src={lang.flag} alt={lang.name} />
                        <span>{lang.name}</span>
                        <div className='h-2 rounded bg-zinc-200 dark:bg-zinc-700'>
                            <div className='h-2 rounded bg-teal-500' style={{ width: `${lang.progress}%` }}></div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )

    return (
        <div className='container mx-auto mt-40 p-5'>
            <h2 className='my-5 text-center text-2xl'>
                <i className='bi bi-globe2'></i> Languages
            </h2>
            <hr className='mx-auto h-1 w-3/4 rounded border-0 bg-zinc-700 dark:bg-zinc-200' />
            <div className='mt-5 grid lg:grid-cols-3'></div>

            <p className='mx-auto max-w-5xl text-center'>
                I have always been interested in traveling and meeting people from different cultures, so why not try to
                learn as many languages as possible? After all, if language is the way to interact with other people, a
                fresh one grants you with new kinds of unique interactions!
            </p>

            <div className='mt-10 grid md:grid-cols-2'>
                <div>
                    <img src='/assets/svg/languages.svg' alt='' className='m-5 mx-auto w-3/5 opacity-90' />
                </div>
                <Lang langs={langs} />
            </div>
        </div>
    )
}

export default Languages
