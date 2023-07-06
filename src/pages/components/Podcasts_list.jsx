import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, FlatList } from 'react-native';

import FillState from '../../api/send_podcasts_state.js';
import StatusContext from '../../context/index.js';
import Podcast from './Podcast_one.jsx';
import choosePodcasts from '../data_processing/podcasts_choose.js';

const styles = StyleSheet.create({
  body: {
    paddingBottom: 5,
  },
  text: {

  },
});

const ListPodcasts = () => {
  const { statusState } = useContext(StatusContext);
  // Get array of objects from state: [ { id, }]

  const podcasts = useSelector((state) => {
    const getPodcasts = state.podcastsReducer.ids.map(
      (id) => state.podcastsReducer.entities[id],
    );
    return getPodcasts;
  });

  const { search } = statusState;
  const findPodcasts = choosePodcasts(podcasts, search);

  const codeJSX = (
    <View style={styles.body}>
      <FillState>
        <FlatList
          data={statusState.filterChannels === 'inactive' ? podcasts : findPodcasts}
          key={(item) => item.id}
          renderItem={({ item }) => <Podcast name={item.author} author={item.podcast} />}
        />
      </FillState>
    </View>
  );

  return codeJSX;
};

export default ListPodcasts;
