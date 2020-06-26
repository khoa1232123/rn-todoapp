import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions/index'

export class AddTodo extends Component {
  state = {
    text: '',
  };

  addTodo = (text) => {
    Keyboard.dismiss();
    this.props.dispatch(addTodo(text));
    this.setState({ text: '' });
  };

  render() {
    return (
      <View style={{ flexDirection: 'row', marginHorizontal: 20 }}>
        <TextInput
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          placeholder="Add todo"
          style={{
            borderWidth: 1,
            borderColor: '#f2f2e1',
            backgroundColor: '#eaeaea',
            height: 50,
            flex: 1,
            padding: 5,
            top: 0,
          }}
        />
        <TouchableOpacity onPress={() => this.addTodo(this.state.text)}>
          <View
            style={{
              height: 50,
              backgroundColor: '#eaeaea',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{ fontSize: 24, color: 'blue', padding: 10 }}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect()(AddTodo);

const style = StyleSheet.create({});
