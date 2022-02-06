import fs from 'fs'
import matter from 'gray-matter'
import Image from 'next/image'
import Link from 'next/link'

import { styles } from 'styles/styles.config'

interface Post {
    slug: string
    frontmatter: {
        title: string
        description: string
        date: string
        image: string
    }
}

const Blog = ({ posts }: { posts: Post[] }) => (
    <div className='container mx-auto mt-20 p-5'>
        <h2 className='text-2xl text-center my-5'>
            <i className='bi bi-pen-fill'></i> Blog posts
        </h2>
        <hr className='bg-zinc-700 dark:bg-zinc-200 border-0 rounded h-1 w-3/4 mx-auto' />
        <div className='grid lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-5 mb-32'>
            {posts.map(({ frontmatter: { title, description, date, image }, slug }, idx: number) => (
                <article
                    key={idx}
                    className={`p-5 m-2 rounded-lg cursor-pointer ${styles.card} animate__animated animate__fadeIn animate__faster`}
                >
                    <Link href={'/post/[slug]'} as={`/post/${slug}`} key={idx} passHref>
                        <div>
                            <h3 className='text-center text-xl'>{title}</h3>
                            <p className='text-center text-sm my-3'>{date}</p>
                            <div className='relative w-full w-full h-56 sm:h-72 md:h-96 lg:h-56 mx-auto'>
                                <Image src={image} alt={title} layout='fill' />
                            </div>
                            <p className='mt-5'>{description}</p>
                        </div>
                    </Link>
                </article>
            ))}
        </div>
    </div>
)

export default Blog

export async function getStaticProps() {
    const files = fs.readdirSync(`${process.cwd()}/posts`)

    const posts = files.map(file => {
        const markdownWithMetadata = fs.readFileSync(`posts/${file}`).toString()

        const { data } = matter(markdownWithMetadata)

        const options = { year: 'numeric', month: 'long', day: 'numeric', image: 'image' }
        const formattedDate = data.date.toLocaleDateString('en-US', options)

        const frontmatter = {
            ...data,
            date: formattedDate,
        }

        return {
            slug: file.replace('.md', ''),
            frontmatter,
        }
    })

    return {
        props: {
            posts,
        },
    }
}
