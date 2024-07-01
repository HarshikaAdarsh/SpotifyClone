import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: [],
	filteredData: [],
	currentTab: '',
	currentlyPlaying: null,
	currentPlaylist: [],
	isCurrentlyPlayingPaused: false,
};

const musicSlice = createSlice({
	name: 'music',
	initialState,
	reducers: {
		setSongs: (state, action) => {
			state.data = action.payload;
			state.filteredData = state.data;
		},
		setCurrentPlaylist: (state) => {
			state.currentPlaylist = state.data;
		},
		setCurrentlyPlaying: (state, action) => {
			state.currentlyPlaying = action.payload;
		},
		setFilteredData: (state, action) => {
			state.filteredData = action.payload;
		},
		setIsCurrentlyPlayingPaused: (state, action) => {
			state.isCurrentlyPlayingPaused = Boolean(action.payload);
		},
	},
});

export const {
	setCurrentlyPlaying,
	setFilteredData,
	setSongs,
	setCurrentPlaylist,
	setIsCurrentlyPlayingPaused,
} = musicSlice.actions;

export default musicSlice.reducer;
