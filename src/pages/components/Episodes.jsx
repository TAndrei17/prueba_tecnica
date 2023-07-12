/* eslint-disable no-use-before-define */
import { useSelector } from 'react-redux';
import {
  View, Text, FlatList, StyleSheet,
} from 'react-native';

// import ButtonAudio from './Button_sound.jsx';
import i18next from '../../../i18next.js';

const EpisodesList = () => {
  const getIdPodcast = useSelector((state) => state.activePodcastReducer.activePodcast);

  // Get episodes of active podcast from state:
  // { episod_id: { id, title, description, release, duration, audioUrl, podcast_id }};
  const getEpisodes = useSelector((state) => {
    const getActualEpisodes = state.episodesReducer.ids
      .map((id) => state.episodesReducer.entities[id])
      .filter((episod) => episod.podcast_id === getIdPodcast);
    return getActualEpisodes;
  });

  const codeJSX = (
    <View>
      <Text style={styles.container}>
        {i18next.t('pageTwo.episodio')}
        {getEpisodes.length - 1}
      </Text>
      <FlatList
        data={getEpisodes}
        key={(item) => item.id}
        renderItem={
          ({ item }) => (
            <View style={styles.container}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.duration}>{item.duration}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
          )
        }
      />
    </View>
  );

  return codeJSX;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    paddingVertical: 5,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#A66F00',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A66F00',
  },
  duration: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#A66F00',
  },
  duratdescription: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#A66F00',
  },
});

export default EpisodesList;

// <ButtonAudio audioUrl={item.audioUrl} />
