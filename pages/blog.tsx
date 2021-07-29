import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'

import Layout from '../components/Layout'
import styles from '../styles/blog.module.scss'


export default function Blog({ posts }) {
	
	return (
		<Layout>
			<div className="container">
				<div className={styles.container}>
					{ posts.reverse().map(({frontmatter: {title, description, date, image}, slug}, index: number) => (
						<Link href={'/post/[slug]'} as={`/post/${slug}`}>
							<div className="animate__animated animate__fadeIn">
								<div className={`row border rounded shadow-sm cursor-pointer ${index % 2 == 0 ? 'flex-row-reverse' : ''}`}>
									<div className="col-lg-6 p-5">
										<article key={title}>
											<header className="mb-3">
												<h3>{title}</h3>
												<span>{date}</span>
											</header>
											<section>
												<p>{description}</p>
											</section>
										</article>
									</div>
									<div className="col-lg-6 p-0">
										<img src={image} alt={title} className="w-100" />
									</div>
								</div>
							</div>
						</Link>
					)) }				
				</div>
			</div>
		</Layout>
	)
}

export async function getStaticProps() {
	const files = fs.readdirSync(`${process.cwd()}/posts`)

	const posts = files.map(file => {
		const markdownWithMetadata = fs
			.readFileSync(`posts/${file}`)
			.toString()

		const { data } = matter(markdownWithMetadata)

		const options = { year: "numeric", month: "long", day: "numeric", image: "image" }
		const formattedDate = data.date.toLocaleDateString("en-US", options)

		const frontmatter = {
			...data,
			date: formattedDate,
		}

		return {
			slug: file.replace(".md", ""),
			frontmatter,
		}
	})

	return {
		props: {
			posts
		}
	}
}