import React from 'react'
import './deep_detail.styles.css'
import SectionsTitles from '../../components/sections-titles/sections-titles.component'
import { Container } from 'react-bootstrap'
const DeepDetail = ({ text, title }) => {
	return (
		<div className='deep-detail'>
			<Container>
				<div className='story-text'>
					<SectionsTitles title={title} />
					<p>{text}</p>
				</div>
			</Container>
		</div>
	)
}

export default DeepDetail
