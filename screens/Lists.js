import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class ListsScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Lists page
        </Text>
      </View>
    );
  }
}

ListsScreen.navigationOptions = {
    title: 'Lists',
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});