import React, { useEffect, useRef } from 'react'
import './preview.css'
import gsap from 'gsap'
import { Container, Row, Col } from 'react-bootstrap'
import Ze from '../../assets/Logo final-08.svg'
import Awn from '../../assets/Logo-Awn-Final.svg'
import Eh from '../../assets/Final_logo إحسان-01.svg'
import { Link } from 'react-router-dom'

function Preview() {
	const flip = useRef(null)
	const img1 = useRef(null)
	const img2 = useRef(null)
	const img3 = useRef(null)

	const tl = gsap.timeline()
	useEffect(() => {
		tl.to(flip.current, {
			clipPath: 'circle(141.4% at 0 0)',
			duration: 2,
			ease: 'elastic.out(1, 0.3)',
		})
			.to(
				img1.current,
				{
					scale: 1,
					// opacity: 1,
					ease: 'elastic.out(1, 0.3)',
					duration: 1.2,
				},
				'0.7',
			)
			.to(
				img2.current,
				{
					scale: 1,
					opacity: 1,
					ease: 'elastic.out(1, 0.3)',
					duration: 1.2,
				},
				'0.5',
			)
			.to(
				img3.current,
				{
					scale: 1,
					opacity: 1,
					duration: 1.2,

					ease: 'elastic.out(1, 0.3)',
				},
				'0.9',
			)
	}, [])
	return (
		<div className='preview'>
			<div className='flip' ref={flip}>
				<Container>
					<Row className='justify-contant-center'>
						<Col lg={4}>
							<div ref={img1} className='card-icon-root'>
								<div className='card-icon-wrapper'>
									<Link className='card-icon-link' to='/comming-soon/'>
										<div className='card-top-section '>
											<img className='card-top-icon ' alt='awm' src={Ze} />
										</div>
										<div className='card-icon-bottom '>
											<div className='card-icon-title'>ZE</div>
											<div className='card-icon-desc'>
												Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, sequi.
											</div>
											<div className='card-plan'>Company</div>
										</div>
									</Link>
								</div>
							</div>
						</Col>
						<Col lg={4}>
							<div ref={img2} className='card-icon-root'>
								<div className='card-icon-wrapper'>
									<Link className='card-icon-link' to='/home'>
										<div className='card-top-section '>
											<img className='card-top-icon ' alt='awm' src={Awn} />
										</div>
										<div className='card-icon-bottom '>
											<div className='card-icon-title'>ZE</div>
											<div className='card-icon-desc'>
												Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, sequi.
											</div>
											<div className='card-plan'>Company</div>
										</div>
									</Link>
								</div>
							</div>
						</Col>
						<Col lg={4}>
							<div ref={img3} className='card-icon-root'>
								<div className='card-icon-wrapper'>
									<Link className='card-icon-link' to='/comming-soon/'>
										<div className='card-top-section '>
											<img className='card-top-icon ' alt='awm' src={Eh} />
										</div>
										<div className='card-icon-bottom '>
											<div className='card-icon-title'>ZE</div>
											<div className='card-icon-desc'>
												Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, sequi.
											</div>
											<div className='card-plan'>Company</div>
										</div>
									</Link>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	)
}

export default Preview
