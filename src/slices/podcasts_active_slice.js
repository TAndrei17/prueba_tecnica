/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeChannels: {},
  ids: [],
};

const podcastsActiveSlice = createSlice({
  name: 'podcastsActive',
  initialState,
  reducers: {
    addPodcasts(state, { payload }) {
      const { entity, id } = payload;
      state.activeChannels = { ...state.activeChannels, entity };
      state.ids = [...state.ids, id];
    },
  },
});

export const { actions } = podcastsActiveSlice;
export default podcastsActiveSlice.reducer;
