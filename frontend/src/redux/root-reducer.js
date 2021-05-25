import { combineReducers } from '@reduxjs/toolkit'
import dataReducer from './services/services.reducer'

const rootReducer = combineReducers({
	data: dataReducer,
})

export default rootReducer
