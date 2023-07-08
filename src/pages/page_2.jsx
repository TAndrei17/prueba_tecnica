import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text /* StyleSheet */ } from 'react-native';
// import { useTranslation } from 'react-i18next';

import AppHeader from './components/AppHeader.jsx';
import getOnePodcast from '../api/get_podcast_axios.js';

/* const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
}); */

const PageTwo = () => {
  const activePodcast = useSelector((state) => state.podcastActiveReducer.activePodcast);
  // console.log(typeof activePodcast); // string
  console.log(getOnePodcast());

  const codeJSX = (
    <View>
      <AppHeader />
      <Text>{activePodcast}</Text>
    </View>
  );

  return codeJSX;
};

export default PageTwo;
