/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activePodcast: '',
  entities: {},
  ids: [],
};

const podcastActiveSlice = createSlice({
  name: 'podcastActive',
  initialState,
  reducers: {
    setActivePodcast(state, { payload }) {
      const { id } = payload;
      state.activePodcast = id;
    },
    createActivePodcast(state, { payload }) {
      const { entities, ids } = payload;
      state.entities = entities;
      state.ids = ids;
    },
  },
});

export const { actions } = podcastActiveSlice;
export default podcastActiveSlice.reducer;
