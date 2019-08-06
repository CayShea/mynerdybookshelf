import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    Image,
    View
  } from 'react-native';
  import { withNavigation } from 'react-navigation';
import { Icon } from 'react-native-elements';


class BookcaseItem extends React.Component {


  _onEditBook = () => {
    // STILL receiveing error for navigation-> 'not an object'
    // let id = this.props.id;
    // console.log(`this book's id is: ${id}`);
    console.log('working to here');
    this.props.navigation.navigate('EditBookScreen');
  }

    render() {
      // const { navigate } = this.props.navigation;
        return(
          <TouchableOpacity onPress={this._onEditBook}>     
          <View style={styles.rowContainer}>
            <Image source={{uri: this.props.thumbnail}}
            style={styles.thumbnail}
            resizeMode="contain" />
            <View style={styles.rowText}>
              <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>
                {this.props.title}
              </Text>
              <Text style={styles.author} numberOfLines={1} ellipsizeMode ={'tail'}>
                {this.props.author}
              </Text>
            </View>
          </View>
          </TouchableOpacity>
        );
    }
}

export default withNavigation(BookcaseItem);

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 100,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 4,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: '#CCC',
    shadowOpacity: 1.0,
    shadowRadius: 1
  },
  title: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#777'
  },
  author: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: '#777'
  },
  thumbnail: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  rowText: {
    flex: 4,
    flexDirection: 'column'
  }
  });