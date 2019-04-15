
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default class MonthScroll extends Component {
  render() {
    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        style={styles.welcome}>
        <Text> January </Text>
        <Text> February </Text>
        <Text> March </Text>
        <Text> April </Text>
        <Text> May </Text>
        <Text> June </Text>
        <Text> July </Text>
        <Text> August </Text>
        <Text> September </Text>
        <Text> October </Text>
        <Text> November </Text>
        <Text> December </Text>
        
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  welcome: {
    
    //textAlign: 'center',
    fontSize: 20,
    paddingTop: 12,
    paddingBottom: 12,
    borderBottomColor: 'rgb(233,233,233)',
    borderBottomWidth: StyleSheet.hairlineWidth,
    

    
  }
});