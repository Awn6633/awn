import { combineReducers } from '@reduxjs/toolkit'
import dataReducer from './services/services.reducer'
import servicesReducer from './works/work.reducer'

const rootReducer = combineReducers({
	data: dataReducer,
	services: servicesReducer,
})

export default rootReducer
