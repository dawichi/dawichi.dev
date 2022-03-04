import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import { useEffect } from 'react'

export default function Post({ content, frontmatter }: { content: string; frontmatter: { image: string } }) {
    useEffect(() => {
        Prism.highlightAll()
    }, [])

    return (
        <div className='animate__animated animate__fadeIn animate__faster min-h-screen'>
            <div
                className='container mx-auto h-[50vh] border border-x-0 border-t-0 bg-cover bg-center'
                style={{ backgroundImage: `url(${frontmatter.image})` }}
            />
            <article className='post-article mx-auto max-w-5xl p-5'>
                <ReactMarkdown>{content}</ReactMarkdown>
                <hr />
                <button className='mt-3 rounded bg-red-600 p-1 px-2 text-white hover:bg-red-800'>
                    <Link href='/blog' passHref>
                        <span>
                            <i className='bi bi-arrow-left'></i> Back
                        </span>
                    </Link>
                </button>
            </article>
        </div>
    )
}

export async function getStaticPaths() {
    const files = fs.readdirSync('posts')

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', ''),
        },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params: { slug } }: { params: { slug: string } }) {
    const markdownWithMetadata = fs.readFileSync(path.join('posts', slug + '.md')).toString()

    const { data, content } = matter(markdownWithMetadata)

    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    const formattedDate = data.date.toLocaleDateString('en-US', options)

    const frontmatter = {
        ...data,
        date: formattedDate,
    }

    return {
        props: {
            content: `# ${data.title}\n${content}`,
            frontmatter,
        },
    }
}
