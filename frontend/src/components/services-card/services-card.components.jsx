import React, { useEffect, useRef } from 'react'
import './services.styles.css'
import grap from '../../assets/undraw_Designer_by46.svg'
import des from '../../assets/undraw_Business_plan_re_0v81.svg'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaRegAngry, FaRegHeart } from 'react-icons/fa'

function ServicesCard({ item }) {
	const scroller = useRef(null)
	const elem = useRef(null)
	gsap.registerPlugin(ScrollTrigger)

	useEffect(() => {
		// gsap.to(elem.current, {
		// 	y: -60,
		// 	scrollTrigger: {
		// 		trigger: scroller.current,
		// 		scrub: 3,
		// 	},
		// })
	}, [])

	return (
		<div ref={scroller} className='services-card-wrapper '>
			<div className='card mb-3'>
				<div className='row  no-gutters'>
					<Col lg={6} md={12}>
						<img ref={elem} src={item.img} className='card-img image-card' alt='...' />
					</Col>

					<Col lg={6} md={12}>
						<div className='card-body'>
							<h5 className='card-title'>{item.title}</h5>

							<h3 className='card-text services-info'>{item.subtitle}</h3>
							<p className='card-text'>{item.desc}</p>
							<p className='card-text '>
								<FaRegAngry style={{ margin: '0 5px' }} />
								604
								<FaRegHeart style={{ margin: '0 5px' }} />
								650
							</p>
						</div>
					</Col>
				</div>
				<Link to={`/services/${item.slug}`} class='stretched-link' />
			</div>
		</div>
	)
}

export default ServicesCard

//
