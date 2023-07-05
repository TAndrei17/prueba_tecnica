import React from 'react';
import { View, StyleSheet } from 'react-native';
// import { useTranslation } from 'react-i18next';

import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
});

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

export default PageOne;
