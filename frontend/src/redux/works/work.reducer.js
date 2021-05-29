import {
	createAsyncThunk,
	createSlice,
	createEntityAdapter,
	createSelector,
} from '@reduxjs/toolkit'
import axios from 'axios'
import image1 from '../../assets/undraw_Designer_by46.svg'
import image2 from '../../assets/undraw_connected_world_wuay.svg'
import image3 from '../../assets/undraw_Business_plan_re_0v81.svg'
import image4 from '../../assets/undraw_video_game_night_8h8m.svg'
import image5 from '../../assets/undraw_Marketing_re_7f1g.svg'
import image6 from '../../assets/undraw_Messaging_re_pgx8.svg'

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

const dataAdapter = createEntityAdapter({})

const initialState = dataAdapter.getInitialState({
	status: 'idle',
	loading: false,
	error: null,
	data: [
		{
			id: 1,
			title: 'Graphic Design',
			slug: 'graphic',
			subtitle:
				'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
			desc: 'Excepteur sint occaecat cupidatat Excepteur proident, sunt in culpa qui officia',
			pos: 'left',
			img: image1,
			gallery: [
				{ id: 1, img: lan1, caption: 'frist' },
				{ id: 2, img: lan2, caption: 'second' },
				{ id: 3, img: lan3, caption: 'third' },
				{ id: 4, img: lan4, caption: 'four' },
				{ id: 5, img: lan5, caption: 'five' },
				{ id: 6, img: lan6, caption: 'sex' },
			],
			works: [
				{ id: 1, img: lan1, caption: 'Frist', pos: 'right' },
				{ id: 2, img: lan2, caption: 'Second', pos: 'left' },
				{ id: 3, img: lan3, caption: 'Third', pos: 'right' },
				{ id: 4, img: lan4, caption: 'Four', pos: 'left' },
				{ id: 5, img: lan5, caption: 'Five', pos: 'right' },
				{ id: 6, img: lan6, caption: 'Sex', pos: 'left' },
			],
		},
		{
			id: 2,
			title: 'Web Development',
			slug: 'web',
			subtitle:
				'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
			desc: 'Excepteur sint occaecat cupidatat Excepteur proident, sunt in culpa qui officia',
			pos: 'right',
			img: image2,
			gallery: [
				{ id: 1, img: lan1, caption: 'frist' },
				{ id: 2, img: lan2, caption: 'second' },
				{ id: 3, img: lan3, caption: 'third' },
				{ id: 4, img: lan4, caption: 'four' },
				{ id: 5, img: lan5, caption: 'five' },
				{ id: 6, img: lan6, caption: 'sex' },
			],
			works: [
				{ id: 1, img: lan1, caption: 'Frist', pos: 'right' },
				{ id: 2, img: lan2, caption: 'Second', pos: 'left' },
				{ id: 3, img: lan3, caption: 'Third', pos: 'right' },
				{ id: 4, img: lan4, caption: 'Four', pos: 'left' },
				{ id: 5, img: lan5, caption: 'Five', pos: 'right' },
				{ id: 6, img: lan6, caption: 'Sex', pos: 'left' },
			],
		},
		{
			id: 3,
			title: 'Business',
			slug: 'Business',
			subtitle:
				'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
			desc: 'Excepteur sint occaecat cupidatat Excepteur proident, sunt in culpa qui officia',
			pos: 'left',
			img: image3,
			gallery: [
				{ id: 1, img: lan1, caption: 'frist' },
				{ id: 2, img: lan2, caption: 'second' },
				{ id: 3, img: lan3, caption: 'third' },
				{ id: 4, img: lan4, caption: 'four' },
				{ id: 5, img: lan5, caption: 'five' },
				{ id: 6, img: lan6, caption: 'sex' },
			],
			works: [
				{ id: 1, img: lan1, caption: 'Frist', pos: 'right' },
				{ id: 2, img: lan2, caption: 'Second', pos: 'left' },
				{ id: 3, img: lan3, caption: 'Third', pos: 'right' },
				{ id: 4, img: lan4, caption: 'Four', pos: 'left' },
				{ id: 5, img: lan5, caption: 'Five', pos: 'right' },
				{ id: 6, img: lan6, caption: 'Sex', pos: 'left' },
			],
		},
		{
			id: 4,
			title: 'Game Development',
			slug: 'game',
			subtitle:
				'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
			desc: 'Excepteur sint occaecat cupidatat Excepteur proident, sunt in culpa qui officia',
			pos: 'right',
			img: image4,
			gallery: [
				{ id: 1, img: lan1, caption: 'frist' },
				{ id: 2, img: lan2, caption: 'second' },
				{ id: 3, img: lan3, caption: 'third' },
				{ id: 4, img: lan4, caption: 'four' },
				{ id: 5, img: lan5, caption: 'five' },
				{ id: 6, img: lan6, caption: 'sex' },
			],
			works: [
				{ id: 1, img: lan1, caption: 'Frist', pos: 'right' },
				{ id: 2, img: lan2, caption: 'Second', pos: 'left' },
				{ id: 3, img: lan3, caption: 'Third', pos: 'right' },
				{ id: 4, img: lan4, caption: 'Four', pos: 'left' },
				{ id: 5, img: lan5, caption: 'Five', pos: 'right' },
				{ id: 6, img: lan6, caption: 'Sex', pos: 'left' },
			],
		},
		{
			i: 5,
			title: 'E-Marketing',
			slug: 'marketing',
			subtitle:
				'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
			desc: 'Excepteur sint occaecat cupidatat Excepteur proident, sunt in culpa qui officia',
			pos: 'left',
			img: image5,
			gallery: [
				{ id: 2, img: lan1, caption: 'frist' },
				{ id: 3, img: lan2, caption: 'second' },
				{ id: 4, img: lan3, caption: 'third' },
				{ id: 4, img: lan4, caption: 'four' },
				{ id: 5, img: lan5, caption: 'five' },
				{ id: 6, img: lan6, caption: 'sex' },
			],
			works: [
				{ id: 1, img: lan1, caption: 'Frist', pos: 'right' },
				{ id: 2, img: lan2, caption: 'Second', pos: 'left' },
				{ id: 3, img: lan3, caption: 'Third', pos: 'right' },
				{ id: 4, img: lan4, caption: 'Four', pos: 'left' },
				{ id: 5, img: lan5, caption: 'Five', pos: 'right' },
				{ id: 6, img: lan6, caption: 'Sex', pos: 'left' },
			],
		},
		{
			id: 6,
			slug: 'media',
			title: 'Media Production',
			subtitle:
				'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt',
			desc: 'Excepteur sint occaecat cupidatat Excepteur proident, sunt in culpa qui officia',
			pos: 'right',
			img: image6,
			gallery: [
				{ id: 1, img: lan1, caption: 'frist' },
				{ id: 2, img: lan2, caption: 'second' },
				{ id: 3, img: lan3, caption: 'third' },
				{ id: 4, img: lan4, caption: 'four' },
				{ id: 5, img: lan5, caption: 'five' },
				{ id: 6, img: lan6, caption: 'sex' },
			],
			works: [
				{ id: 1, img: lan1, caption: 'Frist', pos: 'right' },
				{ id: 2, img: lan2, caption: 'Second', pos: 'left' },
				{ id: 3, img: lan3, caption: 'Third', pos: 'right' },
				{ id: 4, img: lan4, caption: 'Four', pos: 'left' },
				{ id: 5, img: lan5, caption: 'Five', pos: 'right' },
				{ id: 6, img: lan6, caption: 'Sex', pos: 'left' },
			],
		},
	],
})

const servicesSlice = createSlice({
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
	selectAll: selectallWorker,
	selectByIds: selectWorkerByIds,
	selectIds: selectByIds,
} = dataAdapter.getSelectors((state) => state.services)
export const selectData = (state) => state.services.data
export const selectOneService = (slug) => {
	return createSelector([selectData], (item) => item.filter((item) => item.slug == slug))
}
export default servicesSlice.reducer
