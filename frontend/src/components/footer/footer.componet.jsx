import React from 'react'
import countImage from '../../assets/svg.png'
import './footer.styles.css'
function Footer() {
	return (
		<footer style={{ backgroundImage: `url(${countImage})` }} className='pt-4  pt-md-5  footer'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-md mb-4'>
						<h5>Copy Right Bla</h5>
					</div>
					<div className='col-6 col-md'>
						<h5>Features</h5>
						<ul className='list-unstyled '>
							<li>
								<a className='text-white' href='#'>
									Cool stuff
								</a>
							</li>
							<li>
								<a className='text-white' href='#'>
									Random feature
								</a>
							</li>
							<li>
								<a className='text-white' href='#'>
									Team feature
								</a>
							</li>
							<li>
								<a className='text-white' href='#'>
									Stuff for developers
								</a>
							</li>
							<li>
								<a className='text-white' href='#'>
									Another one
								</a>
							</li>
							<li>
								<a className='text-white' href='#'>
									Last time
								</a>
							</li>
						</ul>
					</div>
					<div className='col-6 col-md'>
						<h5>Resources</h5>
						<ul className='list-unstyled'>
							<li>
								<a className='text-white' href='#'>
									Resource
								</a>
							</li>
							<li>
								<a className='text-white' href='#'>
									Resource name
								</a>
							</li>
							<li>
								<a className='text-white' href='#'>
									Another resource
								</a>
							</li>
							<li>
								<a className='text-white' href='#'>
									Final resource
								</a>
							</li>
						</ul>
					</div>
					<div className='col-6 col-md'>
						<h5>About</h5>
						<ul className='list-unstyled'>
							<li>
								<a className='text-white' href='#'>
									Team
								</a>
							</li>
							<li>
								<a className='text-white' href='#'>
									Locations
								</a>
							</li>
							<li>
								<a className='text-white' href='#'>
									Privacy
								</a>
							</li>
							<li>
								<a className='text-white' href='#'>
									Terms
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
