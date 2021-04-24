import React, { createRef, useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { ReactComponent as SVG } from '../../assets/wavesNegative.svg'
import strlink from '../../assets/undraw_Process_re_gws7.svg'
import path1 from '../../assets/Path 3.svg'
import path2 from '../../assets/Path 1.svg'
import path3 from '../../assets/Path 4.svg'
import logo from '../../assets/Logo-Awn-Final.svg'

import './hero.styles.css'
function HeroSection() {
	const title = createRef(null)

	useEffect(() => {
		const width = title.current.clientWidth
		const height = title.current.clientHeight
		title.current.onmousemove = function (e) {
			const oX = (e.clientX / width) * e.offsetX
			const oY = (e.clientY / height) * e.offsetY
			title.current.style.setProperty('--maskX', oX)
			title.current.style.setProperty('--maskY', oY)
		}
		title.current.onmouseleave = function () {
			title.current.style.setProperty('--maskX', 0)
			title.current.style.setProperty('--maskY', 50)
		}

		const hero = document.querySelector('.header')
	})

	return (
		<header className='hero'>
			<div className='hero-content'>
				<div className='hero-text'>
					<div ref={title} className='projectTitle'>
						<div className='titleWrapper'>
							<div className='part'>
								<div className='letterWrapper'>
									<span>A</span>
								</div>
								<div className='letterWrapper'>
									<span>w</span>
								</div>
								<div className='letterWrapper'>
									<span>n</span>
								</div>
								<div className='letterWrapper'>
									<span className='line'></span>
								</div>
								<div className='letterWrapper arabic-title' style={{ margin: '0 10px' }}>
									<span>عون</span>
								</div>
							</div>
							{/* <div className='part'>
								<div className='letterWrapper lineWrapper'>
									<span className='line'></span>
								</div>
								<div className='letterWrapper'>
									<span>عون</span>
								</div>
							</div> */}
						</div>
						<div className='titleWrapper cloneWrapper'>
							<div className='part'>
								<div className='letterWrapper'>
									<span>A</span>
								</div>
								<div className='letterWrapper'>
									<span>w</span>
								</div>
								<div className='letterWrapper'>
									<span>n</span>
								</div>
								<div className='letterWrapper'>
									<span className='line'></span>
								</div>

								<div className='letterWrapper arabic-title' style={{ margin: '0 10px' }}>
									<span>عون</span>
								</div>
							</div>
							{/* <div className='part'>
								<div className='letterWrapper lineWrapper'>
									<span className='line'></span>
								</div>
								<div className='letterWrapper'>
									<span>عون</span>
								</div>
							</div> */}
						</div>
						{/* <div className='titleWrapper'>
							<div className='part'>
								<div className='letterWrapper'>
									<span>A</span>
								</div>
								<div className='letterWrapper'>
									<span>W</span>
								</div>
								<div className='letterWrapper'>
									<span>N</span>
								</div>
							</div>

							<div className='part'>
								<div className='letterWrapper arabic-title'>
									<span>عون</span>
								</div>
							</div>
						</div>
						<div className='titleWrapper cloneWrapper'>
							<div className='part'>
								<div className='letterWrapper'>
									<span>A</span>
								</div>
								<div className='letterWrapper'>
									<span>W</span>
								</div>
								<div className='letterWrapper'>
									<span>N</span>
								</div>
							</div>
							<div className='part'>
								<div className='letterWrapper arabic-title'>
									<span>عون</span>
								</div>
							</div>
						</div> */}
					</div>

					<p className='hook'>
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, modi!
					</p>
				</div>
				<div className='hero-img'>
					<img src={strlink} />
				</div>
			</div>
			<div className='path1' style={{ backgroundImage: `url(${path1})` }}></div>
			<div className='path2' style={{ backgroundImage: `url(${path2})` }}></div>
			<div className='path3' style={{ backgroundImage: `url(${path3})` }}></div>
			<SVG className='svg-hero' />
		</header>
	)
}

export default HeroSection
