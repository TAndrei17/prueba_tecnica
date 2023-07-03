/* eslint-disable no-use-before-define */
/* eslint-disable react/style-prop-object */
/* eslint-disable react/function-component-definition */

import { Client } from 'rollbar-react-native';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import UpdateState from './src/api/update_state.js';
import store from './src/slices';

import PageOne from './src/pages/page_1.jsx';

const rollbar = new Client('e19c73811ae7448cab4c72b06f534dd5');
rollbar.log('Hello, World!');

export default function App() {
  return (
    <Provider store={store}>
      <UpdateState>
        <View style={styles.container}>
          <PageOne />
        </View>
      </UpdateState>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
