import React from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'
import teamSvg from '../../assets/undraw_team_spirit_hrr4.svg'
import './home-about.styles.css'
function HomeAbout() {
	return (
		<section className='home-about-section'>
			<Container>
				<Row>
					<Col lg={6} md={12} sm={12}>
						<p className='home-about-desc lead'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at turpis eget sem
							sollicitudin porta. Donec vel eleifend quam. In maximus aliquet volutpat. Mauris vitae
							ultrices risus, aliquam feugiat urna. Aenean scelerisque, nisi et porttitor elementum,
							dui arcu malesuada
						</p>
						<Button className='mt-5 mb-5'>See More</Button>
					</Col>
					<Col lg={6} md={12} sm={12}>
						<div className='home-about-image'>
							<img src={teamSvg} alt='containe 4 pepole' />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default HomeAbout
