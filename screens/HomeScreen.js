import * as WebBrowser from 'expo-web-browser';
import React, { Component } from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  FlatList,
  View,
  StatusBar,
  Button
} from 'react-native';

import BookcaseItem from './BookcaseItem';

export default class HomeScreen extends Component {

  constructor(props){
    super(props);

    this.state = {
      books: [
        {
          id: 1,
          title: 'Harry Potter and the Goblet of Fire',
          author: 'J. K. Rowling',
          thumbnail: 'https://covers.openlibrary.org/w/id/7984916-M.jpg'
        },
        {
          id: 2,
          title: 'The Hobbit',
          author: 'J. R. R. Tolkien',
          thumbnail: 'https://covers.openlibrary.org/w/id/6979861-M.jpg'
        },
        {
          id: 3,
          title: '1984',
          author: 'George Orwell',
          thumbnail: 'https://covers.openlibrary.org/w/id/7222246-M.jpg'
        }
      ]
    }
  }


  // _onEditBook = (item) => {
  //   console.log('something');

  //   // CURRENT STOPPING POINT IN CODE> Struggling with getting id to pass to child properly.
  //   console.log(item);
  //  However, am able to navigate effectively here.
  //   // this.props.navigation.navigate('EditBook', {id:id})
  // }


  _renderItem = ({item}) => (
    <BookcaseItem
      id={item.id}
      title={item.title}
      author={item.author}
      thumbnail={item.thumbnail}
      // onPress={this._onEditBook}
      />
    
  );

 
_keyExtractor = (item, index) => item.id.toString();

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <FlatList
          data={this.state.books}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
        <Button title='Go to Screen1' onPress={() => {this.props.navigation.navigate('EditBookScreen')}}/>
      </View>
    );
  }
}

  

HomeScreen.navigationOptions = {
  header: null,
  title: 'Bookshelf'
};


const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#F5FCFF',
  }
});
