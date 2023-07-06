import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

const Podcast = (props) => {
  const { name, author } = props;
  const item = (
    <View style={styles.container}>
      <Text style={styles.textPodcast}>{name}</Text>
      <Text style={styles.textAutor}>{author}</Text>
    </View>
  );

  return item;
};

export default Podcast;
