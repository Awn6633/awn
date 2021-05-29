import React, { useState } from 'react'
import './contact-us.page.css'
import { Col, Container, Row, Button } from 'react-bootstrap'
import Image from '../../assets/undraw_work_together_h63l.svg'
import FormInput from '../../components/form_input/form_input.component'
import SectionsTitles from '../../components/sections-titles/sections-titles.component'
import {
	AiFillFacebook,
	AiFillTwitterSquare,
	AiFillLinkedin,
	AiOutlineInstagram,
} from 'react-icons/ai'

function ContactUs() {
	const [info, setInfo] = useState({
		name: '',
		email: '',
		phone: '',
		company_name: '',
		detail: '',
	})
	const onChange = (e) => {
		setInfo({ ...info, [e.target.name]: e.target.value })
	}
	const onLoginClick = (e) => {}
	const { name, email, phone, company_name, detail } = info
	return (
		<div className='contact-us-page'>
			<Container fluid>
				<SectionsTitles title='Contact Us' />
				<Row>
					<Col lg={12}>
						<div className='form-image'>
							<img src={Image} />
							<div className='form-social'>
								<AiFillFacebook />
								<AiFillTwitterSquare />
								<AiFillLinkedin />
								<AiOutlineInstagram />
							</div>
						</div>
					</Col>
					<Col lg={12}>
						<div className='contact-form'>
							<form>
								<FormInput
									type='name'
									name='name'
									value={name}
									onChange={onChange}
									label='Name *'
									required
								/>
								<FormInput
									type='email'
									name='email'
									value={email}
									onChange={onChange}
									label='Email *'
									required
								/>
								<FormInput
									type='tel'
									name='phone'
									value={phone}
									onChange={onChange}
									label='Phone *'
									required
								/>
								<FormInput
									type='text'
									name='company_name'
									value={company_name}
									onChange={onChange}
									label='Company Name *'
									required
								/>
								<FormInput
									textarea
									rows='5'
									cols='5'
									name='detail'
									value={detail}
									onChange={onChange}
									label='Tell Us Some Detail About your bussines *'
									required
								/>
								<div className='form-btn'>
									<Button type='submit'>Submit</Button>
								</div>
							</form>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	)
}

export default ContactUs
