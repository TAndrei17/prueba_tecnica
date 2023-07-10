import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, FlatList /* StyleSheet */ } from 'react-native';
// import { useTranslation } from 'react-i18next';
import _ from 'lodash';

import AppHeader from './components/AppHeader.jsx';
import FillActiveState from '../api/send_selected_state.js';

/* const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
}); */

const PageTwo = () => {
  const activePodcast = useSelector((state) => state.activePodcastReducer.activePodcast);

  const getPodcast = useSelector((state) => {
    const getActivePodcast = state.selectedPodcastsReducer.ids
      .filter((id) => id === activePodcast)
      .map((id) => state.selectedPodcastsReducer.entities[id]);
    return getActivePodcast;
  });

  /* const getEpisodes = useSelector((state) => {
    const getActualEpisodes = state.episodesReducer.ids
      .map((id) => state.episodesReducer.entities[id])
      .filter((episod) => episod.podcast_id === activePodcast);
    return getActualEpisodes;
  });

  <FlatList
          data={getEpisodes}
          key={(item) => _.uniqueId(`${item.id}_`)}
          renderItem={
            ({ item }) => (
              <Text id={item.id}>{item.title}</Text>
            )
        }
        /> */

  if (activePodcast === '') {
    return (
      <View>
        <AppHeader />
        <Text>
          {activePodcast}
          \n
          `is not works`
        </Text>
      </View>
    );
  }

  const codeJSX = (
    <View>
      <AppHeader />
      <Text>{activePodcast}</Text>
      <FillActiveState>
        <FlatList
          data={getPodcast}
          key={(item) => _.uniqueId(`${item.id}_`)}
          renderItem={
            ({ item }) => (
              <View>
                <Text>{item.author}</Text>
                <Text>{item.xmlLink}</Text>
              </View>
            )
        }
        />
      </FillActiveState>
    </View>
  );

  return codeJSX;
};

export default PageTwo;
