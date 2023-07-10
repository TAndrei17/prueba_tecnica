/* eslint-disable no-param-reassign */
import _ from 'lodash';
import { createSlice /* current */ } from '@reduxjs/toolkit';
import { actions as selectedAction } from './podcasts_selected_slice.js';

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
      const unitData = { entities: { ...state.entities, ...entities } };
      state.entities = unitData;
      state.ids = _.uniq([...state.ids, ...ids]);
      // eslint-disable-next-line no-console
      // console.log(current(state));
    },
    extraReducers: (builder) => {
      builder.addCase(selectedAction.clearPodcasts, (state, action) => {
        const { idsOld } = action.payload;
        const getActuaEpisodes = state.ids
          .map((id) => state.entities[id])
          .filter((episod) => !idsOld.include(episod.podcast_id))
          .reduce((acc, episod) => {
            const { id } = episod;
            acc[id] = episod;
            return acc;
          }, {});
        state.entities = getActuaEpisodes;
        state.ids = state.ids.filter((id) => !idsOld.include(id));
      });
    },
  },
});

export const { actions } = episodesSlice;
export default episodesSlice.reducer;
