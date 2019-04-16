import * as React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity, paddingTop, paddingBottom} from 'react-native'

var rend = true;
export default class Invitation extends React.Component{
   constructor(props) {
    
        super(props);
        this.handlePress = this.handlePress.bind(this);
        this.state = {
            declined: false,
            pressed: false
        };
      }
      handlePress(){
          this.setState({pressed:true})
      }
      handleDecline(){
          this.setState({declined:true})
      }
    
    
        render(){
            if(this.state.declined){
                return null;
            }
            return(
                <View style = {styles.container} >
                    <View style = {styles.top}>
                        <Image style={styles.picture} source={require('../design/daniel.jpg')} />
                        <View style = {{flexDirection: 'column'}}>
                            <Text style = {{color: "white"}}> Daniel Graham</Text>
                            <Text style = {{color: "white"}}> Sunday 17 June - 8:00pm</Text>
                        </View>
                    </View>
                    <View style = {styles.bottom}>
                        <TouchableOpacity style = {styles.decline} onPress={() => this.handleDecline()}> 
                            <Image source={require('../design/sliced/CombinedShapeCopy3.png')}/>
                            <Text style = {{color: "red", fontSize:15}}> Delete </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {styles.accept}  onPress={() => this.handlePress()}>
                            <Image source={require('../design/sliced/CombinedShapeCopy4.png')}/>
                            <Text style = {{color: "green", fontSize:15}}> Accept </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
        
}


const styles = StyleSheet.create({
    container:{
        flexDirection: 'column',
        //justifyContent: 'center',
        alignItems: 'center',
        

      },
    top: {
     //flex: 1,
     //borderRadius: 10,
     flexDirection: 'row',
     backgroundColor: 'red',
     alignItems: 'center',
     justifyContent: 'center',
     width: 300,
     height:90,
     //spaceBetween: 40

    },

    picture: {
        width: 50,
        height:50,
        borderRadius: 25,
        marginRight: 25,
    },

    bottom: {
        height:60,
        width:300,
        flexDirection: 'row',
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: 'rgb(233,233,233)',
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    decline: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 40,
        borderRightColor: '#ffffff',
        borderRightWidth: StyleSheet.hairlineWidth,
        
    },
    accept: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 40,

    },

  });