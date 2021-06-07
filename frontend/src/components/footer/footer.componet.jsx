import React from 'react'
import countImage from '../../assets/svg.png'
import './footer.styles.css'
import Blob from '../../assets/footer-blob.svg'
import Blob1 from '../../assets/footer-blob1.svg'
import Blob2 from '../../assets/footer-blob2.svg'
import Blob3 from '../../assets/footer-blob3.svg'
function Footer() {
	return (
		// style={{ backgroundImage: `url(${countImage})` }}
		<footer className='pt-4  pt-md-5  footer'>
			<div className='container-fluid'>
				<div className='row'>
					<div className='col-12 col-md mb-4'>
						<p>Copy Right Awn Team</p>
					</div>
					<div className='col-6 col-md'>
						<h5>Features</h5>
						<ul className='list-unstyled '>
							<li>
								<a className='' href='#'>
									Cool stuff
								</a>
							</li>
							<li>
								<a className='' href='#'>
									Random feature
								</a>
							</li>
							<li>
								<a className='' href='#'>
									Team feature
								</a>
							</li>
							<li>
								<a className='' href='#'>
									Stuff for developers
								</a>
							</li>
							<li>
								<a className='' href='#'>
									Another one
								</a>
							</li>
							<li>
								<a className='' href='#'>
									Last time
								</a>
							</li>
						</ul>
					</div>
					<div className='col-6 col-md'>
						<h5>Resources</h5>
						<ul className='list-unstyled'>
							<li>
								<a className='' href='#'>
									Resource
								</a>
							</li>
							<li>
								<a className='' href='#'>
									Resource name
								</a>
							</li>
							<li>
								<a className='' href='#'>
									Another resource
								</a>
							</li>
							<li>
								<a className='' href='#'>
									Final resource
								</a>
							</li>
						</ul>
					</div>
					<div className='col-6 col-md'>
						<h5>About</h5>
						<ul className='list-unstyled'>
							<li>
								<a className='' href='#'>
									Team
								</a>
							</li>
							<li>
								<a className='' href='#'>
									Locations
								</a>
							</li>
							<li>
								<a className='' href='#'>
									Privacy
								</a>
							</li>
							<li>
								<a className='' href='#'>
									Terms
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<img className='footer-blob' src={Blob2} alt='footer blob' />

			<img className='footer-blob1' src={Blob1} alt='footer blob 1' />
			<img className='footer-blob2' src={Blob2} alt='footer blob' />
			{/* <img className='footer-blob3' src={Blob3} alt='footer blob' /> */}
		</footer>
	)
}

export default Footer
