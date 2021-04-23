import React from 'react'
import countImage from '../../assets/svg.png'
import './client-count.styles.css'
import { FaCode, FaCodeBranch, FaUsers, FaServicestack } from 'react-icons/fa'
import { Container, Row, Col } from 'react-bootstrap'
function ClientCount() {
	return (
		<section style={{ backgroundImage: `url(${countImage})` }} className='clients-count'>
			<div className='clinet-count-wrapper'>
				<Container>
					<Row>
						<Col lg={3} md={6} sm={12}>
							<div className='clients-icon'>
								<FaCode />
								<p>340K</p>
							</div>
						</Col>
						<Col lg={3} md={6} sm={12}>
							<div className='clients-icon'>
								<FaCodeBranch />
								<p>340K</p>
							</div>
						</Col>
						<Col lg={3} md={6} sm={12}>
							<div className='clients-icon'>
								<FaUsers />
								<p>340K</p>
							</div>
						</Col>
						<Col lg={3} md={6} sm={12}>
							<div className='clients-icon last'>
								<FaServicestack />
								<p>340K</p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</section>
	)
}

export default ClientCount
