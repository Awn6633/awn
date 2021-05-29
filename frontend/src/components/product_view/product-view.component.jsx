import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './product-view.styles.css'
const ProductView = ({ product }) => {
	return (
		<div className='product-view'>
			<Container>
				<Row>
					{product.pos == 'right' ? (
						<>
							<Col md={6}>
								<div className='product-text'>
									<h2>{product.caption}</h2>
								</div>
							</Col>
							<Col md={6}>
								<div className='product-img'>
									<img src={product.img} />
								</div>
							</Col>
						</>
					) : (
						<>
							<Col md={6}>
								<div className='product-img'>
									<img src={product.img} />
								</div>
							</Col>
							<Col md={6}>
								<div className='product-text'>
									<h2>{product.caption}</h2>
								</div>
							</Col>
						</>
					)}
				</Row>
			</Container>
		</div>
	)
}

export default ProductView
