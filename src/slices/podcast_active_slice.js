/* eslint-disable no-param-reassign */
import { createSlice /* current */ } from '@reduxjs/toolkit';

const initialState = {
  activePodcast: '',
};

const activePodcastSlice = createSlice({
  name: 'activePodcast',
  initialState,
  reducers: {
    setActivePodcast(state, { payload }) {
      const { id } = payload;
      state.activePodcast = id;
      // eslint-disable-next-line no-console
      // console.log(current(state));
    },
  },
});

export const { actions } = activePodcastSlice;
export default activePodcastSlice.reducer;
