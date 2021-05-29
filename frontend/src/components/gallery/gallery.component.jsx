import React from 'react'
import './gallery.styles.css'
const Gallery = ({ images }) => {
	return (
		<div className='gallery'>
			<div className='gallery-image'>
				{images.map((image) => (
					<div className='img-box' key={image.id}>
						<img src={image.img} alt='' />
						<div className='transparent-box'>
							<div className='caption'>
								<p>{image.caption}</p>
								<p className='opacity-low'>{image.caption}</p>
							</div>
						</div>
					</div>
				))}

				{/* <div className='img-box'>
					<img src='https://picsum.photos/350/250/?image=232' alt='' />
					<div className='transparent-box'>
						<div className='caption'>
							<p>Night Sky</p>
							<p className='opacity-low'>Cinematic</p>
						</div>
					</div>
				</div>
				<div className='img-box'>
					<img src='https://picsum.photos/350/250/?image=431' alt='' />
					<div className='transparent-box'>
						<div className='caption'>
							<p>Tea Talk</p>
							<p className='opacity-low'>Composite</p>
						</div>
					</div>
				</div>
				<div className='img-box'>
					<img src='https://picsum.photos/350/250?image=474' alt='' />
					<div className='transparent-box'>
						<div className='caption'>
							<p>Road</p>
							<p className='opacity-low'>Landscape</p>
						</div>
					</div>
				</div>
				<div className='img-box'>
					<img src='https://picsum.photos/350/250?image=344' alt='' />
					<div className='transparent-box'>
						<div className='caption'>
							<p>Sea</p>
							<p className='opacity-low'>Cityscape</p>
						</div>
					</div>
				</div>
				<div className='img-box'>
					<img src='https://picsum.photos/350/250?image=494' alt='' />
					<div className='transparent-box'>
						<div className='caption'>
							<p>Vintage</p>
							<p className='opacity-low'>Cinematic</p>
						</div>
					</div>
				</div>
				<div className='img-box'>
					<img src='https://picsum.photos/350/250?image=494' alt='' />
					<div className='transparent-box'>
						<div className='caption'>
							<p>Vintage</p>
							<p className='opacity-low'>Cinematic</p>
						</div>
					</div>
				</div> */}
			</div>
		</div>
	)
}

export default Gallery
