import React from 'react'

import axios from 'axios'

import Navbar from './components/navbar/navbar.component'

import { Switch, Route } from 'react-router-dom'
import Footer from './components/footer/footer.componet'
import HomePage from './layouts/home/home.page'

axios.defaults.withCredentials = true

function App() {
	return (
		<div>
			<Navbar />
			<Switch>
				<Route path='/' exact component={HomePage} />
			</Switch>

			<Footer />
		</div>
	)
}

export default App
