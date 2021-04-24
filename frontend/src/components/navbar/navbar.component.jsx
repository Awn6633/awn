import React, { useEffect, useRef } from 'react'

import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'

import { NavLink, Link } from 'react-router-dom'

import './navbar.styles.css'

import Logo from '../../assets/Logo-Awn-Final.svg'

function TopNav() {
	const nav = useRef(null)
	const navHumb = useRef(null)
	const toggle = useRef(null)
	const cloneBrand = useRef(null)
	function toggleNav() {
		// Show Nav
		var navItems = navHumb.current.children
		navHumb.current.classList.toggle('active')

		// Transform Hamburger into 'X'
		toggle.current.classList.toggle('active')

		for (var i = 0, ii = navItems.length; i < ii; i++) {
			navItems[i].classList.toggle('active')
		}
	}
	function handelScroll() {
		if (window.scrollY > 300) {
			nav.current.classList.add('null')
			navHumb.current.classList.remove('null')
			toggle.current.classList.remove('null')
			cloneBrand.current.classList.remove('null')
		} else {
			nav.current.classList.remove('null')
			navHumb.current.classList.add('null')
			toggle.current.classList.add('null')
			cloneBrand.current.classList.add('null')
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
			<Navbar ref={nav} collapseOnSelect expand='xl' fixed='top' className='d-none d-xl-block'>
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
			<div className='brand null' ref={cloneBrand}>
				<Link className='navbar-brand' to='/' exact>
					<img alt='logo' src={Logo} width='50' height='50' />
				</Link>
			</div>

			<nav ref={navHumb} className='nav null'>
				<Link exact to='/' className='nav__link'>
					Home
				</Link>
				<Link exact to='/services' className='nav__link'>
					Services
				</Link>
				<Link exact to='/story' className='nav__link'>
					Our Story
				</Link>
				<Link exact to='/contact' className='nav__link'>
					Contact Us
				</Link>
			</nav>

			<div ref={toggle} onClick={toggleNav} className='hamburger null'>
				<span className='hamburger__patty'></span>
				<span className='hamburger__patty'></span>
				<span className='hamburger__patty'></span>
			</div>
		</div>
	)
}

export default TopNav
