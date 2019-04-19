import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-material-ui';
import { updateTitle } from '../actions/testController';

function mapStateToProps(state) {
  alert('props updating from state', state); // never fires when button is pressed
  return {
    title: state.testReducer.title
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateTitle: data => {
      alert('action is dispatched', data); // fires on button press
      dispatch(updateTitle(data)) // action is dispatched
    }
  };
}

class Home extends Component {
  componentWillReceiveProps(NextProps) {
    alert('componentWillReceiveProps', NextProps); // never fires
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text> // never updates with new state from reducer
        <Button primary text="Press Me" onPress={() => {
          this.props.updateTitle('Home Updates Successfully'); // Dispatch action
          alert(this.props.title); // alert new state
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: 'center'
  },
  text: {
    marginTop: '20%',
    textAlign: 'center'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
