/* eslint-disable no-use-before-define */
import React from 'react';
import { View, StyleSheet } from 'react-native';
// import { useTranslation } from 'react-i18next';

import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';

const PageOne = () => {
  const codeJSX = (
    <View>
      <AppHeader />
      <View style={styles.content}>
        <AppBody />
      </View>
    </View>
  );

  return codeJSX;
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
  },
});

export default PageOne;
