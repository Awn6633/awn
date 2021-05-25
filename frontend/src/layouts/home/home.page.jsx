import React from 'react'

import HomeContact from '../../components/home-contact-us/home-contact.component'

import Clients from '../../components/clients/clients.component'

import CarousalComponent from '../../components/carousal/carousal,component'

import ClientCount from '../../components/clients-count/client-count.component'

import Hero from '../../components/hero/hero.component'

import SectionsTitles from '../../components/sections-titles/sections-titles.component'

import HomeAbout from '../../components/home-about/home-about.component'

import Card from '../../components/services-card/services-card.components'

import { Container, Row, Col } from 'react-bootstrap'

import { useSelector } from 'react-redux'

import './home.styles.css'

import strlink from '../../assets/undraw_Process_re_gws7.svg'

function HomePage() {
	const Clientsdata = useSelector((state) => state.data.clients)

	const Services = useSelector((state) => state.data.data)
	React.useEffect(() => {})

	return (
		<div>
			<>
				<Hero image={strlink} title='AWN' subTitle='عون' />
				<SectionsTitles title='Our Story' />
				<HomeAbout />
				<SectionsTitles title='Service' />
				<Container fluid>
					<Row className='justify-content-center'>
						{Services.map((item) => (
							<Col key={item.id} xl={5} lg={6} md={6}>
								<Card item={item} />
							</Col>
						))}
					</Row>

					<HomeContact />
					<SectionsTitles title='Our Clients' />
				</Container>
				<Container>
					<Clients clinets={Clientsdata} />
					<SectionsTitles title='Comments' />
					<CarousalComponent />
				</Container>
				<ClientCount />
			</>
		</div>
	)
}

export default HomePage
