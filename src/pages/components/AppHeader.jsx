/* eslint-disable no-use-before-define */
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import i18next from '../../../i18next.js';

const AppHeader = () => {
  const codeJSX = (
    <View style={styles.header}>
      <Text style={styles.text}>{i18next.t('pageOne.header')}</Text>
    </View>
  );

  return codeJSX;
};

const styles = StyleSheet.create({
  header: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: '#009999',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
});

export default AppHeader;
