import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-material-ui';
import { updateTitle } from '../actions/testController';

function mapStateToProps(state) {
  return {
    title: state.testReducer.title
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateTitle: data => dispatch(updateTitle(data))
  };
}

class Home extends Component {
  componentWillReceiveProps(NextProps) {
    alert('componentWillReceiveProps', NextProps);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
        <Button primary text="Press Me" onPress={() => {
          this.props.updateTitle('Home Updates Successfully');
          alert(this.props.title);
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
