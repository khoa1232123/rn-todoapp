import React, { Component } from 'react';

import { View, TouchableOpacity, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { toggleTodo } from '../redux/actions';

export class TodoList extends Component {
  render() {
    const { todos, toggleTodo } = this.props;
    return (
      <View style={{ padding: 20 }}>
        {/* <FlatList
          data={todos}
          renderItem={item => {
            <TouchableOpacity key={item.id} onPress={() => toggleTodo(item.id)}>
              <Text
                style={{
                  fontSize: 24,
                  textDecorationLine: item.completed ? 'line-through' : 'none',
                }}
              >
                {item.text}
              </Text>
            </TouchableOpacity>
          }}
        /> */}
        {todos.map((todo) => (
          <TouchableOpacity key={todo.id} onPress={() => toggleTodo(todo.id)}>
            <Text
              style={{
                fontSize: 24,
                textDecorationLine: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleTodo: (id) => dispatch(toggleTodo(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
