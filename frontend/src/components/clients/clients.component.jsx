import React, { useEffect } from 'react'

import './clients.styles.css'
function Clients({ clinets }) {
	useEffect(() => {
		console.log(clinets)
		return () => {}
	}, [])
	return (
		<section>
			<div className='clients'>
				<div className='client-list'>
					{clinets
						? clinets.map((item) => (
								<div key={item.id} className='clients-list-item'>
									<img className='client-logo-image' alt='client2' src={item.img} />
								</div>
						  ))
						: null}
				</div>
			</div>
		</section>
	)
}

export default Clients
