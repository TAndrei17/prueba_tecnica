/* eslint-disable no-use-before-define */
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, FlatList } from 'react-native';

import StatusContext from '../../context/index.js';
import Podcast from './Podcast_one.jsx';
import choosePodcasts from '../data_processing/podcasts_choose.js';

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
  const isFilterActive = statusState.filterChannels === 'inactive' ? podcasts : findPodcasts;

  const codeJSX = (
    <View style={styles.body}>
      <FlatList
        data={isFilterActive}
        key={(item) => item.id}
        renderItem={
          ({ item }) => (
            <Podcast id={item.id} name={item.author} author={item.podcast} />
          )
        }
      />
    </View>
  );

  return codeJSX;
};

const styles = StyleSheet.create({
  body: {
    paddingBottom: 5,
  },
  text: {

  },
});

export default ListPodcasts;
