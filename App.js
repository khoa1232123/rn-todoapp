import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import CounterApp from './screens/CounterApp';
import TodoApp from './screens/TodoApp';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <TodoApp />
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
