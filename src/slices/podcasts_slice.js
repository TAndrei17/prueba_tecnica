import { createSlice, current } from "@reduxjs/toolkit";

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
      console.log(current(state));
    },
  },
});

export const { actions } = podcastsSlice;
export default podcastsSlice.reducer;

