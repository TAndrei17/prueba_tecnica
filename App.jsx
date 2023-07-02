import { Client } from 'rollbar-react-native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const rollbar = new Client('e19c73811ae7448cab4c72b06f534dd5');
rollbar.log('Hello, World!');

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello, World! I am creating!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
