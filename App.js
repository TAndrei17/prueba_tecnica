// import 'react-native-gesture-handler';

/* eslint-disable react/function-component-definition */
import { Client } from 'rollbar-react-native';
import { Provider } from 'react-redux';

import store from './src/slices/index.js';
import StatusProvider from './src/context/status_provider.js';

import MyStack from './src/navigation/navigate.js';

const rollbar = new Client('e19c73811ae7448cab4c72b06f534dd5');
rollbar.log('Hello, World!');

export default function App() {
  return (
    <StatusProvider>
      <Provider store={store}>
        <MyStack />
      </Provider>
    </StatusProvider>
  );
}
