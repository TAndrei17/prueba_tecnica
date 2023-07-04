import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, FlatList } from 'react-native';
// import i18next from '../../../i18next.js';

import choosePodcasts from '../data_processing/podcasts_choose.js';
import ListPodcast from './List_Podcast.jsx';
import StatusContext from '../../context/index.js';

const styles = StyleSheet.create({
  body: {

  },
  text: {

  },
});

const AppBody = () => {
  const { statusState } = useContext(StatusContext);
  // Get array of objects from state: [ { id, }]
  const podcasts = useSelector((state) => {
    const getPodcasts = state.podcastsReducer.ids.map(
      (id) => state.podcastsReducer.entities[id],
    );
    return getPodcasts;
  });
  // eslint-disable-next-line no-console
  // console.log(podcasts);

  const findPodcasts = choosePodcasts(podcasts, 'The');

  const codeJSX = (
    <View style={styles.body}>
      <FlatList
        data={statusState.filterChannels === 'inactive' ? podcasts : findPodcasts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ListPodcast name={item.author} author={item.podcast} />}
      />
    </View>
  );

  return codeJSX;
};

export default AppBody;
