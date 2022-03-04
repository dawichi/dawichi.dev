const Contact = () => (
    <div className='container mx-auto mt-40 p-5'>
        <h2 className='my-5 text-center text-2xl'>
            <i className='bi bi-envelope'></i> Get in touch
        </h2>
        <hr className='mx-auto h-1 w-3/4 rounded border-0 bg-zinc-700 dark:bg-zinc-200' />

        <p className='my-5 text-center'>Do you want to contact me? Leave me a message right here!</p>

        <form action='https://getform.io/f/866900ee-a284-48a0-b031-ab5931937dde' method='POST'>
            <div className='mx-auto grid max-w-4xl md:grid-cols-2'>
                <input
                    className='m-3 rounded border bg-white/50 p-3 shadow dark:bg-zinc-800'
                    type='text'
                    name='name'
                    placeholder='Your name'
                />
                <input
                    className='m-3 rounded border bg-white/50 p-3 shadow dark:bg-zinc-800'
                    type='email'
                    name='email'
                    placeholder='your_email@example.com'
                />
                <textarea
                    className='m-3 rounded border bg-white/50 p-3 shadow dark:bg-zinc-800 md:col-span-2'
                    name='message'
                    placeholder='Write your message...'
                />
            </div>
            <div className='flex justify-center'>
                <button className='rounded bg-teal-500 p-2 px-4 text-white shadow' type='submit'>
                    Send
                </button>
            </div>
        </form>
        <br />
        <br />
        <br />
    </div>
)

export default Contact
