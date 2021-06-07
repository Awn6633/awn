import React, { useEffect, useRef } from 'react'
import './preview.css'
import gsap from 'gsap'
import { Container, Row, Col } from 'react-bootstrap'
import Ze from '../../assets/ze.jpg'
import Awn from '../../assets/awn.jpeg'
import Eh from '../../assets/Eh.jpg'
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
					opacity: 1,
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
							<div className='company'>
								<img ref={img1} alt='ze' src={Ze} />
							</div>
						</Col>
						<Col lg={4}>
							<div className='company'>
								<img ref={img2} alt='awm' src={Awn} />
								<Link to='/home' className='stretched-link' />
							</div>
						</Col>
						<Col lg={4}>
							<div className='company'>
								<img ref={img3} alt='eh' src={Eh} />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</div>
	)
}

export default Preview
