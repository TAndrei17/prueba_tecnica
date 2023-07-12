/* eslint-disable no-use-before-define */
import { useSelector } from 'react-redux';
import {
  View, Image, Text, FlatList, StyleSheet,
} from 'react-native';

const PodcastDescribe = () => {
  const getIdPodcast = useSelector((state) => state.activePodcastReducer.activePodcast);

  // Get active podcast from state:
  // { podcast_id: { id, title, description, author, authorId, image, xmlLink, tracks }}
  const getPodcast = useSelector((state) => {
    const getActivePodcast = state.selectedPodcastsReducer.ids
      .filter((id) => id === getIdPodcast)
      .map((id) => state.selectedPodcastsReducer.entities[id]);
    return getActivePodcast;
  });

  const codeJSX = (
    <View>
      <FlatList
        data={getPodcast}
        key={(item) => item.id}
        renderItem={
          ({ item }) => (
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={{ uri: item.image }}
              />
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.author}>{item.author}</Text>
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
    paddingVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#A66F00',
  },
  author: {
    fontSize: 15,
    marginBottom: 10,
    color: '#A66F00',
  },
  description: {
    fontSize: 15,
    fontStyle: 'italic',
    color: '#A66F00',
  },
});

export default PodcastDescribe;
