import { createAsyncThunk, createSlice, createEntityAdapter } from '@reduxjs/toolkit'
import axios from 'axios'
import image1 from '../../assets/undraw_Designer_by46.svg'
import image2 from '../../assets/undraw_connected_world_wuay.svg'
import image3 from '../../assets/undraw_Business_plan_re_0v81.svg'
import image4 from '../../assets/undraw_video_game_night_8h8m.svg'
import image5 from '../../assets/undraw_Marketing_re_7f1g.svg'
import image6 from '../../assets/undraw_Messaging_re_pgx8.svg'

import client1 from '../../assets/client1.svg'
import client2 from '../../assets/client2.svg'
import client3 from '../../assets/clinet3.svg'
import client4 from '../../assets/client4.svg'
import client5 from '../../assets/client5.svg'
import client6 from '../../assets/client6.svg'

import client7 from '../../assets/client7.svg'
import client8 from '../../assets/client8.svg'

import im1 from '../../assets/1.jpg'
import im2 from '../../assets/2.jpg'
import im3 from '../../assets/3.jpeg'
import im4 from '../../assets/3.jpeg'

import lan1 from '../../assets/land1.jpg'
import lan2 from '../../assets/land2.jpg'
import lan3 from '../../assets/land3.jpg'
import lan4 from '../../assets/land4.jpg'
import lan5 from '../../assets/land5.jpg'
import lan6 from '../../assets/land6.jpg'

export const fetchData = createAsyncThunk(
	'data/fetchData',
	async (_, { rejectWithValue }) => {
		// const source = axios.CancelToken.source();
		// signal.addEventListener("abort", () => {
		//   source.cancel();
		//   console.log("cancled");
		// });
		try {
			const res = await axios.get('https://jsonplaceholder.typicode.com/todos/')
			return res.data
		} catch (error) {
			return rejectWithValue(error.message)
		}
	},
	// {
	//   condition: (_, { getState, extra }) => {
	//     const { data } = getState();
	//     if (data.status === "loading" || data.status === "succeeded") {
	//       return false;
	//     }
	//   },
	//   dispatchConditionRejection: true,
	// }
)

const dataAdapter = createEntityAdapter({
	selectId: (item) => item.slug,
})

const initialState = dataAdapter.getInitialState({
	status: 'idle',
	loading: false,
	error: null,
	clients: [
		{ id: 1, img: client1 },
		{ id: 2, img: client2 },

		{ id: 3, img: client3 },

		{ id: 4, img: client4 },

		{ id: 5, img: client5 },

		{ id: 6, img: client6 },

		{ id: 7, img: client7 },

		{ id: 8, img: client8 },
	],
	team: [
		{
			id: 4,
			name: 'Game Development',
			work: 'Gamed Gdan',
			desc:
				'Excepteur sint occaecat cupidatat Excepteur proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat Excepteur proident, sunt in culpa qui officia',
			pos: 'right',
			img: im1,
			gallery: [
				{ id: 1, img: lan1, caption: 'frist' },
				{ id: 1, img: lan2, caption: 'second' },
				{ id: 1, img: lan3, caption: 'third' },
				{ id: 1, img: lan4, caption: 'four' },
				{ id: 1, img: lan5, caption: 'five' },
				{ id: 1, img: lan6, caption: 'sex' },
			],
			works: [
				{ id: 1, img: lan1, caption: 'frist' },
				{ id: 1, img: lan2, caption: 'second' },
				{ id: 1, img: lan3, caption: 'third' },
				{ id: 1, img: lan4, caption: 'four' },
				{ id: 1, img: lan5, caption: 'five' },
				{ id: 1, img: lan6, caption: 'sex' },
			],
		},
		{
			id: 4,
			name: 'Game Development',
			work: 'Gamed Fash5',
			desc:
				'Excepteur sint occaecat cupidatat Excepteur proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat Excepteur proident, sunt in culpa qui officia',
			pos: 'left',
			img: im2,
			gallery: [
				{ id: 1, img: lan1, caption: 'frist' },
				{ id: 1, img: lan2, caption: 'second' },
				{ id: 1, img: lan3, caption: 'third' },
				{ id: 1, img: lan4, caption: 'four' },
				{ id: 1, img: lan5, caption: 'five' },
				{ id: 1, img: lan6, caption: 'sex' },
			],
			works: [
				{ id: 1, img: lan1, caption: 'frist' },
				{ id: 1, img: lan2, caption: 'second' },
				{ id: 1, img: lan3, caption: 'third' },
				{ id: 1, img: lan4, caption: 'four' },
				{ id: 1, img: lan5, caption: 'five' },
				{ id: 1, img: lan6, caption: 'sex' },
			],
		},
		{
			id: 4,
			name: 'Game Development',
			work: 'Gamed Bs',
			desc:
				'Excepteur sint occaecat cupidatat Excepteur proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat Excepteur proident, sunt in culpa qui officia',
			pos: 'right',
			img: im3,
			gallery: [
				{ id: 1, img: lan1, caption: 'frist' },
				{ id: 1, img: lan2, caption: 'second' },
				{ id: 1, img: lan3, caption: 'third' },
				{ id: 1, img: lan4, caption: 'four' },
				{ id: 1, img: lan5, caption: 'five' },
				{ id: 1, img: lan6, caption: 'sex' },
			],
			works: [
				{ id: 1, img: lan1, caption: 'frist' },
				{ id: 1, img: lan2, caption: 'second' },
				{ id: 1, img: lan3, caption: 'third' },
				{ id: 1, img: lan4, caption: 'four' },
				{ id: 1, img: lan5, caption: 'five' },
				{ id: 1, img: lan6, caption: 'sex' },
			],
		},
		{
			id: 4,
			name: 'Game Development',
			work: 'Gamed',
			desc:
				'Excepteur sint occaecat cupidatat Excepteur proident, sunt in culpa qui officia Excepteur sint occaecat cupidatat Excepteur proident, sunt in culpa qui officia ',
			pos: 'left',
			img: im4,
			gallery: [
				{ id: 1, img: lan1, caption: 'frist' },
				{ id: 1, img: lan2, caption: 'second' },
				{ id: 1, img: lan3, caption: 'third' },
				{ id: 1, img: lan4, caption: 'four' },
				{ id: 1, img: lan5, caption: 'five' },
				{ id: 1, img: lan6, caption: 'sex' },
			],
			works: [
				{ id: 1, img: lan1, caption: 'frist' },
				{ id: 1, img: lan2, caption: 'second' },
				{ id: 1, img: lan3, caption: 'third' },
				{ id: 1, img: lan4, caption: 'four' },
				{ id: 1, img: lan5, caption: 'five' },
				{ id: 1, img: lan6, caption: 'sex' },
			],
		},
	],
})

const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchData.pending]: (state) => {
			state.status = 'loading'
		},
		[fetchData.fulfilled]: (state, action) => {
			state.status = 'succeeded'
			dataAdapter.upsertMany(state, action.payload)
		},
		[fetchData.rejected]: (state, action) => {
			state.status = 'failed'
			state.error = action.payload
		},
	},
})

export const {
	selectAll: selectallData,
	selectByIds: selectDataByIds,
	selectIds: selectByIds,
} = dataAdapter.getSelectors((state) => state.data)

export default dataSlice.reducer
