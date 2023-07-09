/* eslint-disable no-use-before-define */
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { actions as activePodcastAction } from '../../slices/podcast_active_slice.js';

const Podcast = (props) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { id, name, author } = props;

  const chooseChannel = () => {
    dispatch(activePodcastAction.setActivePodcast({ id }));
    navigation.navigate('PageTwo');
  };

  const onePodcast = (
    <View style={styles.container}>
      <TouchableOpacity onPress={chooseChannel}>
        <Text style={styles.textPodcast}>{ name }</Text>
        <Text style={styles.textAutor}>{ author }</Text>
      </TouchableOpacity>
    </View>
  );

  return onePodcast;
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 7,
  },
  textPodcast: {
    alignItems: 'center',
    color: '#A66F00',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textAutor: {
    alignItems: 'center',
    color: '#A66F00',
    fontSize: 14,
    marginBottom: 10,
  },
});

export default Podcast;
