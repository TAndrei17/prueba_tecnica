/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: {},
  ids: [],
};

const podcastsSlice = createSlice({
  name: 'podcasts',
  initialState,
  reducers: {
    addPodcasts(state, { payload }) {
      const { entities, ids } = payload;
      state.entities = entities;
      state.ids = ids;
    },
  },
});

export const { actions } = podcastsSlice;
export default podcastsSlice.reducer;
