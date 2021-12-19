import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'


const Post = ({ content, frontmatter }) => (
	<div className="animate__animated animate__fadeIn animate__faster min-h-screen">
		<div className='h-[50vh] bg-cover bg-center' style={{backgroundImage: `url(${frontmatter.image})`}} />
		<article className="max-w-5xl mx-auto p-5">
			<ReactMarkdown>
				{content}
			</ReactMarkdown>
			<button className="bg-red-600 hover:bg-red-800 text-white p-1 px-2 rounded mt-3">
				<Link href="/blog">
					<span><i className="bi bi-arrow-left"></i> Back</span>
				</Link>
			</button>
		</article>
	</div>
)

export default Post


export async function getStaticPaths() {
	const files = fs.readdirSync('posts')

	const paths = files.map((filename) => ({
		params: {
			slug: filename.replace('.md', ''),
		},
	}))

	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params: { slug } }) {
	const markdownWithMetadata = fs
		.readFileSync(path.join("posts", slug + ".md"))
		.toString()

	const { data, content } = matter(markdownWithMetadata)

	const options = { year: "numeric", month: "long", day: "numeric" }
	const formattedDate = data.date.toLocaleDateString("en-US", options)

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