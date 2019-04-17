
import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native'


export default class DayScroll extends Component {
  render() {
    return (
      <ScrollView>
        <Image style = {{margin: 10}}source={require('../design/sliced/addnewevent.png')}/>
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <Text style={styles.welcome}>Welcome to React Native</Text>
        <Text style={styles.welcome}>Welcome to React Native</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    flex: 1,
    margin: 20,
    backgroundColor: 'grey',
    margin: 10,
    textAlign: 'center',
    fontSize: 20,
    paddingTop: 20,
    
  }
});