import React from 'react'

const Contact = () => {
    return (
        <div className='container mx-auto mt-40 p-5'>
            <h2 className='text-2xl text-center my-5'>
                <i className='bi bi-envelope'></i> Get in touch
            </h2>
            <hr className='bg-zinc-700 dark:bg-zinc-200 border-0 rounded h-1 w-3/4 mx-auto' />

            <p className='text-center my-5'>Do you wanna contact me? Let me a message right here!</p>

            <form action='https://getform.io/f/866900ee-a284-48a0-b031-ab5931937dde' method='POST'>
                <div className='grid md:grid-cols-2 max-w-4xl mx-auto'>
                    <input
                        className='p-3 m-3 border shadow rounded bg-white/50 dark:bg-zinc-800'
                        type='text'
                        name='name'
                        placeholder='Your name'
                    />
                    <input
                        className='p-3 m-3 border shadow rounded bg-white/50 dark:bg-zinc-800'
                        type='email'
                        name='email'
                        placeholder='your_email@example.com'
                    />
                    <textarea
                        className='p-3 m-3 border shadow rounded bg-white/50 dark:bg-zinc-800 md:col-span-2'
                        name='message'
                        placeholder='Leave a message here...'
                    />
                </div>
                <div className='flex justify-center'>
                    <button className='bg-teal-500 shadow rounded text-white p-2 px-4' type='submit'>
                        Send
                    </button>
                </div>
            </form>
            <br />
            <br />
            <br />
        </div>
    )
}

export default Contact
