import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import AddTodo from '../components/AddTodo';
import TodoList from '../components/TodoList';

export class TodoApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AddTodo />
        <View>
          <TodoList />
        </View>
      </View>
    );
  }
}

export default TodoApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 40
  },
});
