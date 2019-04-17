import * as React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'
import {MapView} from 'expo'
import InvitationDetails from './InvitationDetails.js'
import Map from './Map.js'


export default class Details extends React.Component {

    backButton(){
        this.props.navigation.navigate("home")
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.header}>
                    <TouchableOpacity onPress={() => this.backButton()}>
                        <Image style = {{margin: 10}}source={require('../design/sliced/back.png')}/>
                    </TouchableOpacity>
                    
                    <Text style = {styles.title}>DinDin</Text>

                </View>
                <Map />
                
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,

        //flexDirection: 'column',
        //position: 'absolute'
    },

    mapStyle:{
        flex:1,
        zIndex: 0,
       // position: 'absolute'
    },

    header:{
        height: 70,
        flexDirection: 'row',
        //justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 25, 
        paddingBottom: 10,
        borderBottomColor: 'rgb(233,233,233)',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    title:{
        letterSpacing: 0.4,
        textAlign: 'center',
        fontSize: 19,
        color: "#000000",
        paddingLeft: 32+"%",
    },

})




