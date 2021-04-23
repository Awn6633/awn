import React from 'react'
import './sctions-titles.styles.css'
function SectionsTitles({ title }) {
	return (
		<div className='sections-titles-wrapper'>
			<h3 className='sections-title'>{title}</h3>
		</div>
	)
}

export default SectionsTitles
