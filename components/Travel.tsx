import React from 'react'
import Map from './Map'

const Travel = () => (
    <div className='max-w-5xl mx-auto mt-40 p-5'>
        <h2 className='text-2xl text-center my-5'>
            <i className='bi bi-geo-fill'></i> Discovering the world
        </h2>
        <hr className='bg-zinc-700 dark:bg-zinc-200 border-0 rounded h-1 w-3/4 mx-auto' />

        <p className='my-5 text-center'>
            I dream of traveling and knowing as many more countries as possible. I would love to be able to live in
            different countries throughout my life. Luckily, in software development we have the ability to work from
            where we want and for whoever we want through the internet. What an amazing job.
        </p>
        <Map />
    </div>
)

export default Travel
