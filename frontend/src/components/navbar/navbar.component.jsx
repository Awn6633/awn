import React, { useEffect, useRef, useState } from 'react'

import { Navbar, NavDropdown, Nav, Container } from 'react-bootstrap'

import { NavLink, Link } from 'react-router-dom'

import './navbar.styles.css'

import Logo from '../../assets/Logo-Awn-Final.svg'

function TopNav() {
	const navHumb = useRef(null)
	const toggle = useRef(null)
	const cloneBrand = useRef(null)
	const [active, setActive] = useState(null)
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
		var navItems = navHumb.current.children

		if (window.scrollY <= 300 && active === true) {
			navHumb.current.classList.add('active')
			toggle.current.classList.add('active')
			for (var i = 0, ii = navItems.length; i < ii; i++) {
				navItems[i].classList.add('active')
			}
		} else {
			navHumb.current.classList.remove('active')
			toggle.current.classList.remove('active')
			for (var i = 0, ii = navItems.length; i < ii; i++) {
				navItems[i].classList.remove('active')
			}
		}
	}
	useEffect(() => {
		setActive(window.matchMedia('(min-width: 992px)').matches)
		window.addEventListener('scroll', handelScroll)
		console.log('run', active)
		return () => {
			window.removeEventListener('scroll', handelScroll)
		}
	}, [active])

	return (
		<div>
			<div className='brand' ref={cloneBrand}>
				<Link className='navbar-brand' to='/' exact>
					<img alt='logo' src={Logo} width='50' height='50' />
				</Link>
			</div>

			<nav ref={navHumb} className={` nav ${active ? 'active' : ''}`}>
				<Link exact to='/' className={`nav__link ${active ? 'active' : ''}`}>
					Home
				</Link>
				<Link exact to='/services' className={`nav__link ${active ? 'active' : ''}`}>
					Services
				</Link>
				<Link exact to='/story' className={`nav__link ${active ? 'active' : ''}`}>
					Our Story
				</Link>
				<Link exact to='/contact' className={`nav__link ${active ? 'active' : ''}`}>
					Contact Us
				</Link>
			</nav>

			<div ref={toggle} onClick={toggleNav} className={`hamburger ${active ? 'active' : ''}`}>
				<span className='hamburger__patty'></span>
				<span className='hamburger__patty'></span>
				<span className='hamburger__patty'></span>
			</div>
		</div>
	)
}

export default TopNav
