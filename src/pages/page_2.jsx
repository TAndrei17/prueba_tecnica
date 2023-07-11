/* eslint-disable no-use-before-define */
import React from 'react';
import { View } from 'react-native';

import AppHeader from './components/AppHeader.jsx';
import PodcastDescribe from './components/Podcast_desc.jsx';
import FillPodcastState from '../api/send_podcast_state.js';

const PageTwo = () => {
  const codeJsx = (
    <View>
      <AppHeader />
      <FillPodcastState>
        <PodcastDescribe />
      </FillPodcastState>
    </View>
  );
  return codeJsx;
};

export default PageTwo;
