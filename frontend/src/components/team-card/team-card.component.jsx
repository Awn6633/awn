import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import Im1 from '../../assets/1.jpg'
import './team-card.styles.css'
const TeamCard = ({ member }) => {
	return (
		<div className='our-team-card'>
			<Card border='none'>
				<Row noGutters>
					{member.pos == 'right' ? (
						<>
							<Col md={6}>
								<Card.Img src={member.img} />
							</Col>
							<Col md={6}>
								<div className='team-card-body'>
									<div className='team-member-header'>
										<h5>{member.name}</h5>
										<p>{member.work}</p>
									</div>
									<div className='team-member-info'>
										<p>{member.desc}</p>
									</div>
									<div className='team-member-socail'></div>
								</div>
							</Col>
						</>
					) : (
						<>
							<Col md={6}>
								<div className='team-card-body'>
									<div className='team-member-header'>
										<h5>{member.name}</h5>
										<p>{member.work}</p>
									</div>
									<div className='team-member-info'>
										<p>{member.desc}</p>
									</div>
									<div className='team-member-socail'></div>
								</div>
							</Col>
							<Col md={6}>
								<Card.Img src={member.img} />
							</Col>
						</>
					)}
				</Row>
			</Card>
		</div>
	)
}

export default TeamCard
