import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const Typewritter = () => {

	const now = new Date
	let date = now.getFullYear() - 2000
	if (now.getMonth() > 8) { date++ }

	return (
		<>
			<Container>
				<pre id="typewriter" className="p-3 bg-dark rounded text-white">
					<span className="h-key">const</span> <span className="h-const">dawichi</span> <span className="h-key">=</span> {'{ \n \t'}
						name: <span className="h-string">"David M. Fajardo"</span>, {'\n \t'}
						age: <span className="h-number">{date}</span>, {'\n \t'}
						from: <span className="h-string">"Spain"</span>, {'\n \t'}
						hobbies: [<span className="h-string">"Sport", "Travel", "Learn languages"</span>], {'\n \t'}
						technologies: {'{ \n \t \t'}
							front: {'{ \n \t \t \t'}
								javascript: [<span className="h-string">"React, NextJS, Gatsby"</span>], {'\n \t \t \t'}
								css: [<span className="h-string">"Sass, Bootstrap, Tailwindcss"</span>]
							{'\n \t \t }'},{'\n \t \t'}
							back: {'{ \n \t \t \t'}
								javascript: [<span className="h-string">"Node", "Express"</span>], {'\n \t \t \t'}
								python: [<span className="h-string">"Flask, Django"</span>]
							{'\n \t \t }'},{'\n \t \t'}
							mobile: [<span className="h-string">"React Native"</span>], {'\n \t \t'}
							databases: [<span className="h-string">"MySQL", "sqlite", "MongoDB"</span>], {'\n \t \t'}
							team_tools: [<span className="h-string">"Jira, Confluence, Slack"</span>], {'\n \t \t'}
							interests: [<span className="h-string">"Rust", "Go"</span>], {'\n \t'}
						{'}'},{'\n'}
					{'}'}
				</pre>
			</Container>
		</>
	)
}

export default Typewritter
