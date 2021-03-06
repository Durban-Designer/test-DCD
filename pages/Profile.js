import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Profile extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello Profile</Text>
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

const mapStateToProps = state => {
  return {
    //
  };
};

const mapDispatchToProps = {
  //
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
