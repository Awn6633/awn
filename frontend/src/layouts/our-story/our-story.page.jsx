import React from 'react'
import HeroSection from '../../components/hero/hero.component'
import './our-story.page.styles.css'
import Image from '../../assets/Team work-rafiki.svg'
import DeepDetail from '../../components/deep_detail/deep_detail.component'
import { Container, Row, Col } from 'react-bootstrap'
import SectionsTitles from '../../components/sections-titles/sections-titles.component'
import TeamCard from '../../components/team-card/team-card.component'
import { useSelector } from 'react-redux'

function OurStory() {
	const team = useSelector((state) => state.data.team)

	return (
		<div className='our-story'>
			<HeroSection title='Our' subTitle='Story' image={Image} />
			<Container>
				<div className='story-text'>
					<SectionsTitles title='Our Story' />
					<DeepDetail />
				</div>
				<SectionsTitles title='Meet A W N Team' />
				{team.map((item) => (
					<TeamCard key={item.id} member={item} />
				))}
			</Container>
		</div>
	)
}

export default OurStory
