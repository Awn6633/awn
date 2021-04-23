import React, { useEffect, useRef } from 'react'

import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'

import { NavLink } from 'react-router-dom'

import './navbar.styles.css'

import Logo from '../../assets/Logo-Awn-Final.svg'

function TopNav() {
	const nav = useRef(null)
	function handelScroll() {
		if (window.scrollY > 300) {
			nav.current.classList.add('nav-color')
		} else {
			nav.current.classList.remove('nav-color')
		}
	}
	useEffect(() => {
		window.addEventListener('scroll', handelScroll)
		return () => {
			window.removeEventListener('scroll', handelScroll)
		}
	}, [])

	return (
		<div>
			<Navbar ref={nav} collapseOnSelect expand='xl' fixed='top'>
				<Container fluid>
					<NavLink className='navbar-brand' to='/' exact>
						<img alt='logo' src={Logo} width='50' height='50' />
					</NavLink>
					<Navbar.Toggle aria-controls='responsive-navbar-nav' />
					<Navbar.Collapse id='responsive-navbar-nav'>
						<Nav className='ml-auto mr-5'>
							<NavDropdown title='Intrested' id='collasible-nav-dropdown'>
								<NavLink className='nav-link' exact to='/'>
									Home
								</NavLink>
								<NavDropdown.Divider />

								<NavLink className='nav-link' exact to='/'>
									Home
								</NavLink>
								<NavDropdown.Divider />
								<NavLink className='nav-link' exact to='/'>
									Home
								</NavLink>
							</NavDropdown>
							<NavLink className='nav-link' exact to='/'>
								Home
							</NavLink>
							<NavLink className='nav-link' exact to='/services'>
								Service
							</NavLink>
							<NavLink className='nav-link' exact to='/story'>
								Our Story
							</NavLink>
							<NavLink className='nav-link' exact to='/contact-us'>
								Contact Us
							</NavLink>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	)
}

export default TopNav
