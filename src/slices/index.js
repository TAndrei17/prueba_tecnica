import { configureStore } from '@reduxjs/toolkit';
import podcastsReducer from './podcasts_all_slice.js';
import podcastsActiveReducer from './podcasts_active_slice.js';

const store = configureStore({
  reducer: {
    podcastsReducer,
    podcastsActiveReducer,
  },
});

export default store;
