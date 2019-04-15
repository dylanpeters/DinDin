import * as React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, paddingTop, paddingBottom} from 'react-native'
import DayScroll from './DayScroll'
import MonthScroll from './MonthScroll'

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
          <DayScroll/>
        </View>
        
     )
 }

}


const styles = StyleSheet.create(
  {
      container2:{
          height: 70,
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
        //justifyContent: 'center',
        //alignItems: 'center',

      },
      title:{
          letterSpacing: 0.4,
          textAlign: 'left',
          fontSize: 21,
          color: "#000000",
      },
      searchIcon:{
          margin:10
      },
      menuIcon:{
          // width: 30,
          // height: 30,
          margin: 10
      },
      monthscroll:{ 
        paddingTop: 20,
        
       

      }

      
  }
)