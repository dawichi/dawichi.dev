import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import styles from '../../styles/projects.module.scss'

const Projects = () => {

	const Card = ({ title, image, url, desc, tech }) => {
		return (
			<Col xs={12} lg={6} style={{padding: 15}}>
				<a className="animate__animated animate__backInDown" href={url} target="_blank" style={{height: '100%'}}>
					<div className={styles.card}>
						<h5><i className="bi bi-folder"></i> {title}</h5>
						<div className="px-5">
							<img className="w-100" src={image} alt={title}/>
						</div>
						<p className="mt-3">{desc}</p>
						<div className={styles.langs}>
							{ tech.map(x => (
								<span style={{position: 'relative'}}>
									<span className={styles.point} style={{backgroundColor: x.color}}></span>
									<span>{x.name}</span>
								</span>
							))}
						</div>
					</div>
				</a>
			</Col>
		)
	}

	return (
		<>
			<Container className={styles.container}>

				<h4><i className="bi bi-github"></i> Open source projects</h4>
				<hr/>
				<br/>
				
				<Row>
					<Card
						title='dawichi.dev'
						image='https://raw.githubusercontent.com/Dawichi/dawichi.dev/master/public/assets/img/screenshot_dark.png'
						url='https://github.com/dawichi/dawichi.dev'
						desc='This website! Explore its code on GitHub'
						tech={[
							{name: 'NextJS', color: 'black'},
							{name: 'TypeScript', color: '#2f76c4'},
							{name: 'Bootstrap', color: '#7952b3'}
						]}
					/>
					<Card
						title='Cloud app'
						image='https://raw.githubusercontent.com/Dawichi/cloud-app/main/sample2.png'
						url='https://github.com/Dawichi/cloud-app'
						desc='My final project, a MERN cloud storage app'
						tech={[
							{name: 'JS', color: '#f4dc1a'},
							{name: 'Tailwindcss', color: '#e879f9'},
							{name: 'MongoDB', color: '#13aa52'},
							{name: 'Docker', color: '#2496ed'}
						]}
					/>
					<Card
						title='Gif Search'
						image='https://raw.githubusercontent.com/Dawichi/gif-search/main/public/showcase.png'
						url='https://github.com/Dawichi/gif-search'
						desc='GIF search app, using the Giphy API'
						tech={[
							{name: 'NextJS', color: 'black'},
							{name: 'TypeScript', color: '#2f76c4'},
							{name: 'Tailwindcss', color: '#e879f9'},
						]}
					/>
					<Card
						title='Map Markers'
						image='https://raw.githubusercontent.com/Dawichi/map-markers/main/showcase.jpg'
						url='https://github.com/Dawichi/map-markers'
						desc='Mobile app to store markers in a map'
						tech={[
							{name: 'React Native', color: '#61dafb'},
						]}
					/>
				</Row>
			</Container>			
		</>
	)
}

export default Projects