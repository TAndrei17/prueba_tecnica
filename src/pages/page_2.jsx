import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text /* StyleSheet */ } from 'react-native';
// import { useTranslation } from 'react-i18next';

import AppHeader from './components/AppHeader.jsx';
import FillActiveState from '../api/send_selected_state.js';

/* const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
}); */

const PageTwo = () => {
  const activePodcast = useSelector((state) => state.activePodcastReducer.activePodcast);
  console.log(activePodcast); // string

  const codeJSX = (
    <View>
      <AppHeader />
      <FillActiveState>
        <Text>{activePodcast}</Text>
      </FillActiveState>
    </View>
  );

  return codeJSX;
};

export default PageTwo;
