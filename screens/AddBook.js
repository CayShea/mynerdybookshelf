import React  from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function AddBookScreen() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Add Book page
        </Text>
      </View>
    );
  }


AddBookScreen.navigationOptions = {
    title: 'Add Book',
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