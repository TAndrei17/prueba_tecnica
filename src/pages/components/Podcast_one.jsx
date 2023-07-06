import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginBottom: 7,
  },
  text: {
    alignItems: 'center',
    color: '#A66F00',
    fontSize: 14,
    paddingBottom: 5,
    fontWeight: 'bold',
  },
});

const Podcast = (props) => {
  const { name, author } = props;
  const item = (
    <View style={styles.container}>
      <Text style={styles.text}>
        {`Autor: ${name}\nPodcast: ${author}`}
      </Text>
    </View>
  );

  return item;
};

export default Podcast;
