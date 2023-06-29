import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainContainer from './Navigation/MainContainer';
import {Provider} from 'react-redux';
import { Store } from './redux/store';

export default function App() {
  return (
      <Provider store={Store}>
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
