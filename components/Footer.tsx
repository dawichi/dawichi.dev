import React from 'react'

const Footer = () => {
	return (
		<footer className='bg-white/50 dark:bg-zinc-800'>
			{/* <Container className={styles.buymeacoffee} fluid>
				<a href="https://www.buymeacoffee.com/dawichi">
					<img
						height="50px"
						width="235px"
						alt="https://www.buymeacoffee.com/dawichi"
						src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=dawichi&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff"
					/>
				</a>
			</Container> */}
			<div className='dark:bg-zinc-800 p-3'>
				<div className='container mx-auto flex justify-around'>
					<div>
						<span>Site developed by me! ^^ &copy;{" "}{new Date().getFullYear().toString()}{" "}</span>
					</div>
					<div>
						Made with <span className='bg-yellow-300 dark:bg-yellow-500 p-1 rounded'>JS</span> and <span className='text-red-600'>♥</span> !
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
