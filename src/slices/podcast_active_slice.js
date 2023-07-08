/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activePodcast: '',
};

const podcastActiveSlice = createSlice({
  name: 'podcastActive',
  initialState,
  reducers: {
    setActivePodcast(state, { payload }) {
      const { id } = payload;
      state.activePodcast = id;
    },
  },
});

export const { actions } = podcastActiveSlice;
export default podcastActiveSlice.reducer;
