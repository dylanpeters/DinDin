import * as React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, paddingTop, paddingBottom} from 'react-native'
import Carousel from 'react-native-snap-carousel';
import Invitation from './Invitation'

export default class Carousel2 extends React.Component {
    
    constructor() {
      super()
      this.state = {
        entries: [
            Invitation,
            Invitation,
            Invitation,
            // Invitation,
            // Invitation,
            // Invitation,

          ],
          empty: false
      }
    }
    componentDidUpdate() {
        this.forceUpdate();
    }
    componentDidMount(){
        
    }
    
    _renderItem ({item, index}) {
      
      return (
        <View style = {styles.carouselView} >
            <Invitation/>
        </View>
    );}
  
    render () {

      var otherThanNull = this.state.entries.some(function (el) {
        return el === null;
      }); 
      if(otherThanNull){
        return null;
      }
      
      return (
        <View style = {styles.carouselView} >
          <Carousel 
          ref={(c) => { this._carousel = c; }}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={370}
          itemWidth={300}
          layout={'stack'}
        />
        </View>
        
   ); 
  }}

  const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: '#000000',
     alignItems: 'center',
     justifyContent: 'center',
     paddingTop: 100
    },

    carouselView: {
        
      backgroundColor: '#e5eaf2',
      height: 175,
      justifyContent: 'center',
      alignItems: 'center',
  
  },
  none:{

  }

  });