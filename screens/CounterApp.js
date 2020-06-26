import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class CounterApp extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }

  inceaseCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  deceaseCounter = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  render() {
    const { counter, increaseCounter, decreaseCounter } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => decreaseCounter()}>
          <Text style={{ fontSize: 20 }}> Decrease </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20 }}>{counter}</Text>
        <TouchableOpacity onPress={() => increaseCounter()}>
          <Text style={{ fontSize: 20 }}> Increase </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
    decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);
