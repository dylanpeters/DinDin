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
            Invitation,
            Invitation,
            Invitation,

          ],
      }
    }
    componentDidUpdate() {
        this.forceUpdate();
    }
    componentDidMount(){
        
    }
    _renderItem ({item, index}) {
      
      return (
        <View  >
            <Invitation/>
        </View>
    );}
  
    render () {
      
      return (
        <Carousel 
          ref={(c) => { this._carousel = c; }}
          data={this.state.entries}
          renderItem={this._renderItem}
          sliderWidth={370}
          itemWidth={300}
          layout={'stack'}
        />
   ); 
  }}

  const styles = StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: '#000000',
     alignItems: 'center',
     justifyContent: 'center',
     paddingTop: 100
  }});