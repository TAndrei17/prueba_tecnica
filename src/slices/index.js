import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    podcastsReducer,
  },
});

export default store;