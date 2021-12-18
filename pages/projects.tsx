import React from 'react'

const projects = () => {
	
	const Card = ({ title, image, url, desc, tech }) => {
		return (
			// TODO: SHADOW DARK para todos los componentes
			<div className='p-4 bg-white/50 dark:bg-zinc-800 shadow hover:shadow-xl rounded'>
				<a className="animate__animated animate__backInDown" href={url} target="_blank" style={{height: '100%'}}>
					<div className={''}>
						<h5><i className="bi bi-folder"></i> {title}</h5>
						<div className="px-5">
							<img className="w-100" src={image} alt={title}/>
						</div>
						<p className="mt-3">{desc}</p>
						<div className={''}>
							{ tech.map(x => (
								<span style={{position: 'relative'}}>
									<span className={''} style={{backgroundColor: x.color}}></span>
									<span>{x.name}</span>
								</span>
							))}
						</div>
					</div>
				</a>
			</div>
		)
	}

	return (
		<div className='container mx-auto mt-20 p-5'>
			<h2 className="text-2xl text-center my-5"><i className="bi bi-github"></i> Open source projects</h2>
			<hr className='bg-zinc-700 dark:bg-zinc-200 border-0 rounded h-1 w-3/4 mx-auto'/>
			<div className='grid lg:grid-cols-3 gap-4 mt-5'>

			{projects_list.map((project, idx) => (
				<Card
					title={project.title}
					image={project.image}
					url={project.url}
					desc={project.desc}
					tech={project.tech}
				/>
			))}
			</div>
		</div>			
	)
}

export default projects



const projects_list = [
	{
		title: 'dawichi.dev',
		image: 'https://raw.githubusercontent.com/Dawichi/dawichi.dev/master/public/assets/img/screenshot_dark.png',
		url: 'https://github.com/dawichi/dawichi.dev',
		desc: 'This website! Explore its code on GitHub',
		tech: [
			{name: 'NextJS', color: 'black'},
			{name: 'TypeScript', color: '#2f76c4'},
			{name: 'Bootstrap', color: '#7952b3'}
		],
	},
	{
		title: 'Hexastats',
		image: 'https://raw.githubusercontent.com/Dawichi/hexastats/main/showcase.png',
		url: 'https://github.com/Dawichi/hexastats',
		desc: 'A web to make custom graphs of my friends\'s stats from an online game',
		tech: [
			{name: 'NextJS', color: 'black'},
			{name: 'TypeScript', color: '#2f76c4'},
			{name: 'Tailwindcss', color: '#e879f9'},
			{name: 'Bootstrap', color: '#7952b3'}
		],
	},
	{
		title: 'Cloud app',
		image: 'https://raw.githubusercontent.com/Dawichi/cloud-app/main/sample2.png',
		url: 'https://github.com/Dawichi/cloud-app',
		desc: 'My final project, a MERN cloud storage app',
		tech: [
			{name: 'JS', color: '#f4dc1a'},
			{name: 'Tailwindcss', color: '#e879f9'},
			{name: 'MongoDB', color: '#13aa52'},
			{name: 'Docker', color: '#2496ed'}
		],
	},
	{
		title: 'Hexakill',
		image: 'https://raw.githubusercontent.com/Dawichi/hexakill/main/showcase.png',
		url: 'https://github.com/Dawichi/hexakill',
		desc: 'A web game at a very first stage, just an experiment with gaming programming',
		tech: [
			{name: 'NextJS', color: 'black'},
			{name: 'TypeScript', color: '#2f76c4'},
			{name: 'Tailwindcss', color: '#e879f9'}
		],
	},
	{
		title: 'Gif Search',
		image: 'https://raw.githubusercontent.com/Dawichi/gif-search/main/public/showcase.png',
		url: 'https://github.com/Dawichi/gif-search',
		desc: 'GIF search app, using the Giphy API',
		tech: [
			{name: 'NextJS', color: 'black'},
			{name: 'TypeScript', color: '#2f76c4'},
			{name: 'Tailwindcss', color: '#e879f9'}
		],
	},
	{
		title: 'Map Markers',
		image: 'https://raw.githubusercontent.com/Dawichi/map-markers/main/showcase.jpg',
		url: 'https://github.com/Dawichi/map-markers',
		desc: 'Mobile app to store markers in a map',
		tech: [
			{name: 'React Native', color: '#61dafb'}
		],
	},
]