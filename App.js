import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './src/Screens/MainContainer';
import { Provider } from 'react-redux';
import { store } from './src/redux/store/Store';

export default function App() {
  return (
    <Provider store={store}>
      <MainContainer/>
    </Provider>
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
