import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import i18next from 'i18next';

import PageOne from '../pages/page_1.jsx';
import PageTwo from '../pages/page_2.jsx';

const Stack = createNativeStackNavigator();

const MyStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="PageOne">
      <Stack.Screen
        name="PageOne"
        component={PageOne}
        options={{ title: i18next.t('pageOne.title') }}
      />
      <Stack.Screen
        name="PageTwo"
        component={PageTwo}
        options={{ title: i18next.t('pageTwo.title') }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MyStack;
