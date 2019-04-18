
import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native'
import { withNavigation} from 'react-navigation';



 class DayScroll extends Component {

clickAddEvent(){
    // alert("hey");
  this.props.navigation.navigate("addevent")
 }
  render() {
    return (
      <ScrollView>

        <View style = {styles.day}>
            <Text  style = {{fontWeight: 'bold'}}> Tuesday 12 June</Text>
        </View>
      
        <View style = {styles.invite}>
            <Image style={styles.picture} source={require('../design/daniel.jpg')} />
            <View style = {{flexDirection: 'column'}}>
                  <Text style = {{color: "#1A1A1A"}}> Daniel Graham</Text>
                  <Text style = {{color: "#7f7f7f", marginRight: 18}}> Sunday 17 June - 8:00pm</Text>
            </View>
            <Image style = {styles.icon} source={require('../design/sliced/call.png')}/>
            <Image style = {styles.icon} source={require('../design/sliced/email.png')}/>

        </View>

        <View style = {styles.day}>
          <Text  style = {{fontWeight: 'bold'}}> Wednesday 13 June</Text>
        </View>

        <TouchableOpacity style = {styles.button} onPress = {()=> this.clickAddEvent()}>
          <Image style = {{paddingTop: 12}} source={require('../design/sliced/addnewevent.png')}/>
        </TouchableOpacity>
        <View style = {styles.day}>
          <Text  style = {{fontWeight: 'bold'}}> Thursday 14 June</Text>
        </View>

        <View style = {styles.invite}>
            <Image style={styles.picture} source={require('../design/daniel.jpg')} />
            <View style = {{flexDirection: 'column'}}>
                  <Text style = {{color: "#1A1A1A"}}> Daniel Graham</Text>
                  <Text style = {{color: "#7f7f7f", marginRight: 18}}> Sunday 17 June - 8:00pm</Text>
            </View>
            <Image style = {styles.icon} source={require('../design/sliced/call.png')}/>
            <Image style = {styles.icon} source={require('../design/sliced/email.png')}/>

        </View>
        <View style = {styles.day}>
          <Text  style = {{fontWeight: 'bold'}}> Friday 15 June</Text>
        </View>
        <TouchableOpacity style = {styles.button} onPress = {()=> this.clickAddEvent()}>
          <Image style = {{paddingTop: 12}} source={require('../design/sliced/addnewevent.png')}/>
        </TouchableOpacity>
        <View style = {styles.day}>
          <Text  style = {{fontWeight: 'bold'}}> Saturday 16 June</Text>
        </View>

        <TouchableOpacity style = {styles.button} onPress = {()=> this.clickAddEvent()}>
          <Image style = {{paddingTop: 12}} source={require('../design/sliced/addnewevent.png')}/>
        </TouchableOpacity>
        <View style = {styles.day}>
          <Text  style = {{fontWeight: 'bold'}}> Sunday 17 June</Text>
        </View>

        <TouchableOpacity style = {styles.button} onPress = {()=> this.clickAddEvent()}>
          <Image style = {{paddingTop: 12}} source={require('../design/sliced/addnewevent.png')}/>
        </TouchableOpacity>
        <View style = {styles.day}>
          <Text  style = {{fontWeight: 'bold'}}> Monday 18 June</Text>
        </View>

        <TouchableOpacity style = {styles.button} onPress = {()=> this.clickAddEvent()}>
          <Image style = {{paddingTop: 12}} source={require('../design/sliced/addnewevent.png')}/>
        </TouchableOpacity>
        <View style = {styles.day}>
          <Text  style = {{fontWeight: 'bold'}}> Tuesday 19 June</Text>
        </View>

        <TouchableOpacity style = {styles.button} onPress = {()=> this.clickAddEvent()}>
          <Image style = {{paddingTop: 12}} source={require('../design/sliced/addnewevent.png')}/>
        </TouchableOpacity>
       
        
       
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
  },
  invite:{
    height: 85,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'center',

  },
  picture: {
    width: 50,
    height:50,
    borderRadius: 25,
    marginRight: 20,
    
  },
  icon: {
    width: 37,
    height:37,
    marginRight: 10,
  },

  
});

export default withNavigation(DayScroll);