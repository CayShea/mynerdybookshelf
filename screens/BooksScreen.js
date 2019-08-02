import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import { Card, Text, Button, Icon } from 'react-native-elements';

export default class BooksScreen extends React.Component {
  constructor() {
    super();
    this.state = {
        
    }
  }
  
    render(){
    return (
        <ScrollView style={styles.container}>
            
          <Card
              title='Browse Books'
              >
              <Text style={{marginBottom: 10}}>
                The idea with React Native Elements is more about component structure than actual design.
              </Text>
              <Button
                icon={<Icon name='code' color='#ffffff' />}
                backgroundColor='#03A9F4'
                buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                title='BROWSE' 
                onPress={() => {this.props.navigation.navigate('BooksScreen')}}/>
          </Card>

        </ScrollView>
      );}
    }  

BooksScreen.navigationOptions = {
  title: 'BooksScreen',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
