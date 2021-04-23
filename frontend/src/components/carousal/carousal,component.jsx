import React from 'react'
import './carousal.styles.css'
import { Carousel } from 'react-bootstrap'
import image1 from '../../assets/pngtree-user-vector-avatar-png-image_1541962.jpg'
import image2 from '../../assets/pngtree-man-avatar-icon-professional-man-character-png-image_1055448.jpg'
import image3 from '../../assets/download.jpeg'

function CarousalComponent() {
	return (
		<div>
			<Carousel interval={2000}>
				<Carousel.Item>
					<div className='client-replay'>
						<img src={image1} alt='First slide' />
						<span>22 Jun 2021</span>
						<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia </p>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className='client-replay'>
						<img src={image2} alt='First slide' />
						<span>22 Jun 2021</span>
						<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia </p>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className='client-replay'>
						<img src={image1} alt='First slide' />
						<span>22 Jun 2021</span>
						<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia </p>
					</div>
				</Carousel.Item>
			</Carousel>
		</div>
	)
}

export default CarousalComponent
