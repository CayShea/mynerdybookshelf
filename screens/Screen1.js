import React from 'react';
import { ScrollView, StyleSheet, Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class Screen1 extends React.Component {
  constructor() {
    super();
    this.state = {
        title: 'I am Screen1'
    }
      console.log('constructor');
  }
  
  componentDidMount(){
    debugger;
    console.log('didMount');
    this.setState({
        title: 'I am Updated Screen1'
    })
    }

  componentWillUnmount(){
    console.log('willUnmount');
    }

    componentDidUpdate(){
        console.log('didUpdate');
    }
  
    render(){
    debugger;
    console.log('rendering')
    return (
        <ScrollView style={styles.container}>
            
        </ScrollView>
      );}
    }  

Screen1.navigationOptions = {
  title: 'Screen1',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
