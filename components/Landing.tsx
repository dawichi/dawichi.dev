import React from 'react'

const Landing = () => {

	// Wraps the children inside a div with an animation
	const Animate = ({animation, children}) => {
		const animations = {
			0: 'animate__backInDown',
			1: 'animate__lightSpeedInRight',
			2: 'animate__lightSpeedInLeft',
			3: 'animate__jackInTheBox',
			4: 'animate__rollIn',
			5: 'animate__rotateInUpRight',
		}
		return <div className={`animate__animated ${animations[animation]}`}>{children}</div>
	}

	// Returns a icon with a link to the url
	const Icon = ({icon, url}:{icon:string,url:string}) => (
		<a className={'hover:text-teal-500'} target="_blank" rel="noreferrer" href={url}>
			<div className="m-3 animate__animated animate__rollIn animate__delay-1s">
				<i className={"bi bi-" + icon}></i>
			</div>
		</a>
	)

	return (
		<div className='min-h-screen flex flex-col justify-center items-center'>
			<div className='grid md:grid-cols-3 gap-4'>
				<div className='flex justify-start items-center px-10 md:block'>
					<img src="/assets/svg/dev-web.svg" className="w-1/3 md:w-full opacity-90" alt=""/>
				</div>
				
				<div className='text-center text-2xl md:text-3xl md:text-4xl'>
					<h1>
						<div className='flex justify-center'>
							<Animate animation={0}>Hi&nbsp;</Animate>
							<Animate animation={1}>all <i className="bi bi-suit-heart-fill"></i></Animate>
						</div>
						<div className='flex justify-center'>
							<Animate animation={2}>I am&nbsp;</Animate>
							<Animate animation={3}>Dawichi,</Animate>
						</div>
						<div className='flex justify-center'>
							<Animate animation={4}>software&nbsp;</Animate>
							<Animate animation={5}>developer</Animate>
						</div>
						<div className='flex justify-center'>
							<Icon icon={'linkedin'} url={'https://www.linkedin.com/in/dawichi/'} />
							<Icon icon={'instagram'} url={'https://www.instagram.com/dawichi_/'} />
							<Icon icon={'twitter'} url={'https://twitter.com/dawichi_'} />
						</div>
					</h1>
				</div>
	
				<div className='flex justify-end items-center px-10 md:block'>
					<img src="/assets/svg/dev-app.svg" className="w-1/3 md:w-full opacity-90" alt=""/>
				</div>
			</div>
			
			<svg className="fill-black dark:fill-white animate-bounce duration-300" version="1.1" width="80px" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 451.847 451.847"><g><path d="M225.923,354.706c-8.098,0-16.195-3.092-22.369-9.263L9.27,151.157c-12.359-12.359-12.359-32.397,0-44.751 c12.354-12.354,32.388-12.354,44.748,0l171.905,171.915l171.906-171.909c12.359-12.354,32.391-12.354,44.744,0 c12.365,12.354,12.365,32.392,0,44.751L248.292,345.449C242.115,351.621,234.018,354.706,225.923,354.706z"></path></g></svg>
		</div>
	)
}

export default Landing