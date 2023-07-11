import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import i18next from 'i18next';

import PageOne from '../pages/page_1.jsx';
import PageTwo from '../pages/page_2.jsx';

const Stack = createNativeStackNavigator();
export const Drawer = createDrawerNavigator();

const PageDrawer = () => {
  <Drawer.Navigator>
    <Drawer.Screen name="PageTwo" component={PageTwo} />
  </Drawer.Navigator>;
};

const MyStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="PageOne">
      <Stack.Screen
        name="PageOne"
        component={PageOne}
        options={{ title: i18next.t('pageOne.titlePage') }}
      />
      <Stack.Screen
        name="PageTwo"
        component={PageTwo}
        options={{ title: i18next.t('pageTwo.titlePage') }}
      />
      <Stack.Screen
        name="Drawer"
        component={PageDrawer}
        options={{
          title: i18next.t('pageDrawer.titlePage'),
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MyStack;
