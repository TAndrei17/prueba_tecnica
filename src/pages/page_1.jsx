import React from 'react';
import { View } from 'react-native';
// import { useTranslation } from 'react-i18next';

import AppHeader from './components/AppHeader';
import AppBody from './components/AppBody';

const PageOne = () => {
  const codeJSX = (
    <View>
      <AppHeader />
      <AppBody />
    </View>
  );

  return codeJSX;
};

export default PageOne;
