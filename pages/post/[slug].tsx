import React from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

import Layout from '../../components/Layout'
import styles from '../../styles/blog.module.scss'


export default function Post({ content, frontmatter }) {
	console.log(frontmatter)
	return (
		<Layout>
			<div className={styles.post}>
				<div style={{backgroundImage: `url(${frontmatter.image})`}} />
				<article className="container p-5">
					<ReactMarkdown>
						{content}
					</ReactMarkdown>
					<Link href="/blog">
						<span className="my-3 btn btn-danger btn-sm">
							<i className="bi bi-arrow-left"></i> Back
						</span>
					</Link>
				</article>
			</div>
		</Layout>
	)
}

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