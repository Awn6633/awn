import React, { useEffect } from 'react'
import Gallery from '../../components/gallery/gallery.component'
import ServicesHero from '../../components/services-hero/services-hero.component'
import './services-layout.page.css'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { selectOneService } from '../../redux/works/work.reducer'
import DeepDetail from '../../components/deep_detail/deep_detail.component'
import SectionsTitles from '../../components/sections-titles/sections-titles.component'
import ProductView from '../../components/product_view/product-view.component'
import { Link } from 'react-router-dom'
function ServicesPage({ match }) {
	const services = useSelector(selectOneService(match.params.slug))
	useEffect(() => {}, [])
	return (
		<div className='services'>
			<ServicesHero title={services[0].title} />
			<DeepDetail
				title='Deep Detail'
				text='A variety of services allow you to provide you with “one help” under the banner of our youth group The stages go through the commercial identity and set-up planning from the start of your project and development to the foundation Games, video programming, photo production, websites, electronic design, and marketing Technical and support, and applications'
			/>
			<Container>
				<SectionsTitles title='Our Experience' />
				<Gallery images={services[0].gallery} />
			</Container>
			{services[0].works.map((work) => (
				<ProductView product={work} />
			))}
			<SectionsTitles title='Think We Are Awosome ?' />
			<div className='services-contact'>
				<Link className='btn btn-primary m-auto' to='/contact'>
					Contact us
				</Link>
			</div>
		</div>
	)
}

export default ServicesPage
