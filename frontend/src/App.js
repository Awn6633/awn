import React from 'react'

import axios from 'axios'

import Navbar from './components/navbar/navbar.component'

import { Switch, Route } from 'react-router-dom'
import Footer from './components/footer/footer.componet'
import HomePage from './layouts/home/home.page'
import OurStory from './layouts/our-story/our-story.page'
import ContactUs from './layouts/contact-us/contact-us.page'
import ServicesPage from './layouts/services-layout/services-layout.page'

axios.defaults.withCredentials = true

function App() {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route path='/home' exact component={HomePage} />
				<Route path='/story' exact component={OurStory} />
				<Route path='/contact' exact component={ContactUs} />
				<Route path='/services/:slug' exact component={ServicesPage} />
			</Switch>

			<Footer />
		</div>
	)
}

export default App
