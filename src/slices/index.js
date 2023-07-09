import { configureStore } from '@reduxjs/toolkit';

import activePodcastReducer from './podcast_active_slice.js';
import podcastsReducer from './podcasts_all_slice.js';
import selectedPodcastsReducer from './podcasts_selected_slice.js';
import episodesReducer from './episodes_all_slice.js';

const store = configureStore({
  reducer: {
    activePodcastReducer,
    podcastsReducer,
    selectedPodcastsReducer,
    episodesReducer,
  },
});

export default store;
