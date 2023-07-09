/* eslint-disable no-param-reassign */
import { createSlice /* current */ } from '@reduxjs/toolkit';

const initialState = {
  entities: {},
  ids: [],
};

const episodesSlice = createSlice({
  name: 'episodes',
  initialState,
  reducers: {
    addEpisodes(state, { payload }) {
      const { entities, ids } = payload;
      state.entities = entities;
      state.ids = ids;
      // eslint-disable-next-line no-console
      // console.log(current(state));
    },
  },
});

export const { actions } = episodesSlice;
export default episodesSlice.reducer;
