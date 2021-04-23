import React from 'react'
import './home-contact.styles.css'
import contactSvg from '../../assets/undraw_contact_us_15o2.svg'

import { FaFacebook, FaWhatsapp, FaLocationArrow } from 'react-icons/fa'

import { Container, Col, Row, Button } from 'react-bootstrap'
function HomeContact() {
	return (
		<section className='home-contact-us'>
			<Container>
				<Row>
					<Col lg={6} md={12} sm={12}>
						<div className='contact-wrapper'>
							<h2 className='home-contact-title '>Ready To Get Started?</h2>
							<div className='contact-icon'>
								<div className='socail-icons'>
									<FaFacebook style={{ color: `var(--color2)` }} />
									<FaWhatsapp style={{ color: `var(--color2)` }} />
									<FaLocationArrow style={{ color: `var(--color2)` }} />
								</div>
								<div className='contact-btn'>
									<Button className='mt-5 mb-5'>Contact US</Button>
								</div>
							</div>
						</div>
					</Col>
					<Col lg={6} md={12} sm={12}>
						<div className='home-about-image'>
							<img src={contactSvg} alt='containe socail communcations way' />
						</div>
					</Col>
				</Row>
			</Container>
		</section>
	)
}

export default HomeContact
