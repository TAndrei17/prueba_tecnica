/* eslint-disable no-console */
/* eslint-disable no-param-reassign */
import { createSlice /* current */ } from '@reduxjs/toolkit';

const initialState = {
  entities: {},
  ids: [],
};

const selectedPodcastsSlice = createSlice({
  name: 'selectedPodcasts',
  initialState,
  reducers: {
    updatePodcasts(state, { payload }) {
      const { podcastDescription } = payload;
      const { id } = podcastDescription;
      if (!state.ids.includes(id)) {
        state.ids.push(id);
      }
      state.entities[id] = podcastDescription;
      // console.log(current(state));
    },
    clearPodcasts(state, { payload }) {
      const { entities, ids } = payload;
      state.entities = entities;
      state.ids = ids;
      // console.log(current(state));
    },
  },
});

export const { actions } = selectedPodcastsSlice;
export default selectedPodcastsSlice.reducer;
