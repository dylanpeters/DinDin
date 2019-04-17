
import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';


export default class DayScroll extends Component {
  render() {
    return (
      <ScrollView>

        <View style = {styles.day}>
          <Text  style = {{fontWeight: 'bold'}}> Tuesday 12 June</Text>
        </View>

        <View style = {styles.button}>
          <Image style = {{paddingTop: 12}} source={require('../design/sliced/addnewevent.png')}/>
        </View>
        <View style = {styles.day}>
          <Text  style = {{fontWeight: 'bold'}}> Wednesday 13 June</Text>
        </View>

        <View style = {styles.button}>
          <Image style = {{paddingTop: 12}} source={require('../design/sliced/addnewevent.png')}/>
        </View>
        <View style = {styles.day}>
          <Text  style = {{fontWeight: 'bold'}}> Thursday 14 June</Text>
        </View>

        <View style = {styles.button}>
          <Image style = {{paddingTop: 12}} source={require('../design/sliced/addnewevent.png')}/>
        </View>
        <View style = {styles.day}>
          <Text  style = {{fontWeight: 'bold'}}> Friday 15 June</Text>
        </View>
        <View style = {styles.button}>
          <Image style = {{paddingTop: 12}} source={require('../design/sliced/addnewevent.png')}/>
        </View>
        <View style = {styles.day}>
          <Text  style = {{fontWeight: 'bold'}}> Saturday 16 June</Text>
        </View>

        <View style = {styles.button}>
          <Image style = {{paddingTop: 12}} source={require('../design/sliced/addnewevent.png')}/>
        </View>
        <View style = {styles.day}>
          <Text  style = {{fontWeight: 'bold'}}> Sunday 17 June</Text>
        </View>

        <View style = {styles.button}>
          <Image style = {{paddingTop: 12}} source={require('../design/sliced/addnewevent.png')}/>
        </View>
        <View style = {styles.day}>
          <Text  style = {{fontWeight: 'bold'}}> Monday 18 June</Text>
        </View>

        <View style = {styles.button}>
          <Image style = {{paddingTop: 12}} source={require('../design/sliced/addnewevent.png')}/>
        </View>
        <View style = {styles.day}>
          <Text  style = {{fontWeight: 'bold'}}> Tuesday 19 June</Text>
        </View>

        <View style = {styles.button}>
          <Image style = {{paddingTop: 12}} source={require('../design/sliced/addnewevent.png')}/>
        </View>
       
        
       
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
 
  button:{
    height: 75,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'rgb(233,233,233)',
    borderTopColor: 'rgb(233,233,233)',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    backgroundColor: '#f7f7f7'
  },

  day: {
    height: 42,
    // alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: 'rgb(233,233,233)',
    borderTopColor: 'rgb(233,233,233)',
    borderTopWidth: 1,
    borderBottomWidth: 1,
  }
});