import React from 'react';
import { View, Text /* StyleSheet */ } from 'react-native';
// import { useTranslation } from 'react-i18next';

import AppHeader from './components/AppHeader';

/* const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
}); */

const PageTwo = () => {
  const codeJSX = (
    <View>
      <AppHeader />
      <Text>Test</Text>
    </View>
  );

  return codeJSX;
};

export default PageTwo;
