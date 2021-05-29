import React from 'react'
import './services-hero.styles.css'
import { Container, Row, Col } from 'react-bootstrap'
import { ReactComponent as SVG } from '../../assets/book.svg'
import Test from '../../assets/undraw_real-time_sync_o57k.svg'

function ServicesHero({ title }) {
	return (
		<header className='next-hero'>
			<div className='next-hero-content'>
				<div className='next-hero-info'>
					<h2 className='opacity-title'>{title}</h2>
					<h2 className='catogriy-title'>Services</h2>

					<p>
						Helping you on the way, we help you to manage and develop your project to reach your
						goal
					</p>
				</div>
				<div className='next-hero-img'>
					<img src={Test} />
				</div>
			</div>

			<SVG className='svg-next-hero' />
		</header>
	)
}

export default ServicesHero
