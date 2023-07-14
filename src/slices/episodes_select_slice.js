/* eslint-disable no-param-reassign */
import _ from 'lodash';
import { createSlice /* current */ } from '@reduxjs/toolkit';
import { actions as selectedAction } from './podcast_select_slice.js';

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
      const unitEntities = { ...state.entities, ...entities };
      state.entities = unitEntities;
      const unitIds = [...state.ids, ...ids];
      state.ids = _.uniq(unitIds);
      // eslint-disable-next-line no-console
      // console.log(current(state));
    },
    extraReducers: (builder) => {
      builder.addCase(selectedAction.clearPodcasts, (state, action) => {
        // here are ids of actual podcasts
        const { ids } = action.payload;
        const getActuaEpisodes = state.ids
          .map((id) => state.entities[id])
          .filter((episod) => ids.include(episod.podcast_id))
          .reduce((acc, episod) => {
            const { id } = episod;
            acc[id] = episod;
            return acc;
          }, {});
        state.entities = getActuaEpisodes;
        state.ids = Object.keys(getActuaEpisodes);
      });
    },
  },
});

export const { actions } = episodesSlice;
export default episodesSlice.reducer;
