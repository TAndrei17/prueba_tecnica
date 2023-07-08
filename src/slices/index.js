import { configureStore } from '@reduxjs/toolkit';
import podcastsReducer from './podcasts_all_slice.js';
import podcastActiveReducer from './podcast_active_slice.js';

const store = configureStore({
  reducer: {
    podcastsReducer,
    podcastActiveReducer,
  },
});

export default store;
