import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  list: {
    alignItems: 'center',
    color: '#A60000',
    fontSize: 14,
    paddingBottom: 5,
    fontWeight: 'bold',
  },
});

const ListPodcast = (props) => {
  const { name, author } = props;
  const item = (
    <View style={styles.container}>
      <Text style={styles.list}>
        {`Autor: ${name}\nPodcast: ${author}`}
      </Text>
    </View>
  );

  return item;
};

export default ListPodcast;
