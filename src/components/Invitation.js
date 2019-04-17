import * as React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import { withNavigation} from 'react-navigation';


var rend = true;
class Invitation extends React.Component{
  
   constructor(props) {
        super(props);
        //const { navigation } = this.props;
        this.state = {
            declined: false,
            accepted: false,
            red: false,
            green: false,

        };
      }
       
      flashRed(){
        this.setState({red:true})
      }
      normal(){
        this.setState({red:false})
        this.setState({green:false})
      }
      flashGreen(){
          this.setState({green: true})
      }
      handleAccept(){
          this.setState({accepted:true})
      }
      handleDecline(){
          this.setState({declined:true})
      }
    clickTop(){
         // alert("hey");
       this.props.navigation.navigate("details")
      }
    
    
        render(){
            if(this.state.declined){
                return null;
            }
            if(this.state.accepted){
                return null;
            }
            return(
                <View style = {styles.container} >

                    <TouchableOpacity activeOpacity = {1}
                    style = {this.state.red? styles.redtop:this.state.green? styles.greentop:styles.top} onPress = {() => this.clickTop()} >
                        <Image style={styles.picture} source={require('../design/daniel.jpg')} />
                        <View style = {{flexDirection: 'column'}}>
                            <Text style = {{color: "#1A1A1A"}}> Daniel Graham</Text>
                            <Text style = {{color: "#7f7f7f"}}> Sunday 17 June - 8:00pm</Text>
                        </View>
                    </TouchableOpacity>

                    <View 
                    style = {this.state.red? styles.redbottom:this.state.green? styles.greenbottom:styles.bottom}
                    >
                        <TouchableOpacity style = {styles.decline} onPressOut={()=>this.normal()} onPressIn = {() => this.flashRed()} onPress={() => this.handleDecline()} > 
                            <Image source={require('../design/sliced/CombinedShapeCopy3.png')}/>
                            <Text style = {{color: "red", fontSize:15}}> Delete </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style = {styles.accept} onPressOut={()=>this.normal()} onPressIn = {() => this.flashGreen()} onPress={() => this.handleAccept()}>
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
        //marginTop: 17,
        //marginBottom: 30,
    
        

      },
    
    top: {
     //flex: 1,
     //borderRadius: 10,
     flexDirection: 'row',
     backgroundColor: 'white',
     alignItems: 'center',
     justifyContent: 'center',
     width: 300,
     height:90,
     borderTopLeftRadius: 10,
     borderTopRightRadius: 10,
     //spaceBetween: 40

    },
    redtop: {
       
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height:90,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        
   
       },
    greentop: {
       
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 255, 0, 0.5);',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height:90,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
       },
   

    picture: {
        width: 50,
        height:50,
        borderRadius: 25,
        marginRight: 25,
    },

    bottom: {
        height:50,
        width:300,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: 'rgb(233,233,233)',
        borderTopWidth: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    redbottom: {
        height:50,
        width:300,
        flexDirection: 'row',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: 'rgb(233,233,233)',
        borderTopWidth: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    greenbottom: {
        height:50,
        width:300,
        flexDirection: 'row',
        backgroundColor: 'rgba(0, 255, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopColor: 'rgb(233,233,233)',
        borderTopWidth: 1,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    decline: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 40,
        borderRightColor: 'rgb(233,233,233)',
        borderRightWidth: 1,
        
        
    },
    accept: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 40,

    },

  });

  export default withNavigation(Invitation);