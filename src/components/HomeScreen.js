import * as React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import DayScroll from './DayScroll'
import MonthScroll from './MonthScroll'
import Carousel from './Carousel'
import Invitation from './Invitation'

export default class HomeScreen extends React.Component {
    render() {

      return (
        <View style = {styles.container1}>
          <View style={styles.container2}>
            <TouchableOpacity >
              <Image style={styles.menuIcon} source={require('../design/sliced/sidemenubtn.png')}/>
            </TouchableOpacity>
              <Text style={styles.title}> DinDin</Text>
            <TouchableOpacity>
              <Image style={styles.searchIcon} source={require('../design/sliced/searchbtn.png')} />
            </TouchableOpacity>
          </View>


          <MonthScroll style ={styles.monthscroll}/>

          <View style = {styles.pendingStyle}>
              <Text style = {{marginLeft: 12}}>PENDING (6)</Text>
          </View>
          
          <Carousel />
          
          <DayScroll/>
        </View>
        
     )
 }

}

const styles = StyleSheet.create(
  {
      container2:{
          height: 60,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: 25, 
          paddingBottom: 10,
          borderBottomColor: 'rgb(233,233,233)',
          borderBottomWidth: StyleSheet.hairlineWidth,

      },
      container1:{
        flexDirection: 'column',
      },

      title:{
          letterSpacing: 0.4,
          textAlign: 'left',
          fontSize: 19,
          color: "#000000",
      },

      searchIcon:{
          margin:10
      },
      menuIcon:{
          margin: 10
      },
      monthscroll:{ 
        paddingTop: 20,
        paddingBottom: 10,
      },

      carouselView: {
         
          backgroundColor: '#e5eaf2',
          height: 175,
          justifyContent: 'center',
          alignItems: 'center',
      
        
      },
      pendingStyle:{
        height: 31,
        backgroundColor: '#f9fafd',
        justifyContent: 'center',
        
      }


      
  }
)