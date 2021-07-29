import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import styles from '../../styles/projects.module.scss'

const Projects = () => {

	return (
		<>
			<Container className={styles.container}>

				<h4><i className="bi bi-github"></i> Open source projects</h4>
				<hr/>
				
				<Row>
					<Col xs={12} sm={6} md={6} lg={4}>
						<a href="https://github.com/dawichi/dawichi.dev" target="blank">
							<img src="https://github-readme-stats.vercel.app/api/pin/?username=dawichi&repo=dawichi-gatsby&theme=custom" alt="project1" />
						</a>
					</Col>

					<Col xs={12} sm={6} md={6} lg={4}>
						<a href="https://github.com/dawichi/cloud-app" target="blank">
							<img src="https://github-readme-stats.vercel.app/api/pin/?username=dawichi&repo=cloud-app&theme=custom" alt="project2" />
						</a>
					</Col>

					<Col xs={12} sm={6} md={6} lg={4}>
						<a href="https://github.com/dawichi/gif-expert-app" target="blank">
							<img src="https://github-readme-stats.vercel.app/api/pin/?username=dawichi&repo=gif-expert-app&theme=custom" alt="project3" />
						</a>
					</Col>

					<Col xs={12} sm={6} md={6} lg={4}>
						<a href="https://github.com/dawichi/dawichi-card" target="blank">
							<img src="https://github-readme-stats.vercel.app/api/pin/?username=dawichi&repo=dawichi-card&theme=custom" alt="project4" />
						</a>
					</Col>

					<Col xs={12} sm={6} md={6} lg={4}>
						<a href="https://github.com/dawichi/ReactHooks" target="blank">
							<img src="https://github-readme-stats.vercel.app/api/pin/?username=dawichi&repo=ReactHooks&theme=custom" alt="project5" />
						</a>
					</Col>

					<Col xs={12} sm={6} md={6} lg={4}>
						<a href="https://github.com/dawichi/w3-bootstrap4" target="blank">
							<img src="https://github-readme-stats.vercel.app/api/pin/?username=dawichi&repo=w3-bootstrap4&theme=custom" alt="project6" />
						</a>
					</Col>
				</Row>
			</Container>			
		</>
	)
}

export default Projects