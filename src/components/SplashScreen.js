import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity,Dimensions, Animated} from 'react-native'
import icon from '../design/sliced/Illustration.png'
import dindintext from '../design/sliced/dindintext.png'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import I18n from 'react-native-i18n';
import logo from '../design/sliced/logo.png'
import oval1 from '../design/sliced/oval1.png'
import oval2 from '../design/sliced/oval2.png'
import oval3 from '../design/sliced/oval3.png'
import greenGirl from '../design/sliced/greenGirl.png'
import orangeGirl from '../design/sliced/orangeGirl.png'
import purpleGuy from '../design/sliced/purpleGuy.png'

import * as firebase from 'firebase';
//initialize firebase
const firebaseConfig = {
    apiKey: "AIzaSyDz6WEG5tZmuvlYCgtYdXk74g2_x3tGDR4",
    authDomain: "dindin-73fdb.firebaseapp.com",
    databaseURL: "https://dindin-73fdb.firebaseio.com",
    projectId: "dindin-73fdb",
    storageBucket: "dindin-73fdb.appspot.com"
  }
firebase.initializeApp(firebaseConfig);

class FadeInView extends React.Component{
    state = {
        fadeAnim: new Animated.Value(0),
    }
    
    componentDidMount() {
    Animated.loop(
        Animated.sequence([
          Animated.timing(
              this.state.fadeAnim,
              {
                toValue: 1,
                duration: 3000,
            }),
          Animated.timing( 
              this.state.fadeAnim, 
            {
                toValue: 0,
                duration: 3000
            })
        ]),
        {
          iterations: 100
        }
      ).start()
}


render() {
    let { fadeAnim } = this.state;
    
    return (
        <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
    }
}

I18n.fallbacks = true;

//I18n.locale = 'ar';
I18n.translations = {
  en: {
    greeting: 'Get Started',
    slogan: 'Connecting Food Lovers',
  },
  ar: {
    greeting: 'البدء',
    slogan: 'ربط عشاق الطعام'
  },
};
let {width, height} = Dimensions.get('screen');
//Expo.ScreenOrientation.allowAsync(Expo.ScreenOrientation.Orientation.PORTRAIT);
class Splash extends Component {

    componentDidMount() {
        
        firebase.auth().onAuthStateChanged((user)=>{
            if(user != null){
                console.log(user)
            }
        })
    }
    async loginWithFacebook(){
        const {type,token} = await Expo.Facebook.logInWithReadPermissionsAsync
        ('1980326875411816', {permissions: ['public_profile']})

        if(type == 'success'){
            const credential = firebase.auth.FacebookAuthProvider.credential(token)
            firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error)=>{
                console.log(error)
            })
            this.props.navigation.navigate("home")
        }``
    }
   

    render(){
        // if(width > height){
        //     alert("hey");
        // }
        return(
            <View style = {styles.container} >        
                <View style = {styles.backgroundContainer}>
                    <View style = {styles.backgroundContainer}>
                        <View style = {styles.backgroundContainer}>
                            <View style = {styles.backgroundContainer}>
                                <Image source={logo} style={styles.image}/>  
                            </View>
                            <Image source={oval3} style={styles.image}/>  
                        </View>
                        <Image source={oval2} style={styles.image}/>
                    </View>
                    <Image source={oval1} style={styles.image}/>
                </View>
                <View style = {styles.iconcontainer}>
                    <View style = {styles.toprow}>
                        <FadeInView style = {styles.iconstyle}>
                            <Image source={greenGirl} />
                            <Image source={orangeGirl} />
                        </FadeInView> 
                    </View>
                    <View style = {styles.bottomrow}>
                        <FadeInView style = {styles.iconstyle}>
                            <Image source={purpleGuy} />                    
                        </FadeInView>
                    </View>
                    
                </View>
                    

               
                
                <View style = {styles.text1}>
                    {/* <Image source={dindintext} style = {styles.dindin} /> */}
                    <Text style = {{fontSize: 32, letterSpacing: 1, color: "#808080" }}>DinDin</Text>
                    <Text style = {{fontStyle: "italic", color: "#808080"}}>{I18n.t('slogan')}</Text>
                </View>
                <TouchableOpacity style = {styles.bottom} onPress={() => this.loginWithFacebook()}>
                    <View style = {styles.text2}>
                        <Text style = {{color: "#ffffff" }}>{I18n.t('greeting')}</Text>
                    </View>
                                      
                    
                </TouchableOpacity>
                
            
            </View> 
        );
    }
}
//, {locale: 'ar'}
//<FadeInView style = {styles.iconstyle}>
//<Image source={logo} style={styles.image}/>
//</FadeInView>

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    toprow:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    bottomrow:{
        flexDirection:'row',
        paddingBottom:200
    },
    iconcontainer:{
        // justifyContent: 'center',
        // alignItems:'center',
        flexDirection:'column'
    },
    iconstyle: {
        
        flex: 1,
        alignItems: 'center',
        flexDirection:'row',
        justifyContent: 'center',
        paddingHorizontal:35
        //justifyContent: 'flex-start',
        // width: wp("30%"),
        // height: hp("10%"),
        // paddingTop: hp("10%"),

    },
    backgroundContainer: {
        justifyContent:'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        top: 0,
        right: 0,
        left: 0,
       
        
    },
    image: {
        //flex: 1,
        // width: wp("30%"),
        // height: hp("50%"),
        //resizeMode: 'contain',
        //zIndex: 0,
 
    },
    image2: {
        flex: 1,
        // width: wp("30%"),
        // height: hp("50%"),
        resizeMode: 'contain',
        zIndex: 1,
        position: "absolute",
    },

    text1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        width: 100+'%',
        height: 40,

    },

    dindin: {
        flex: 1,
        width: 50+'%',
        height: 60+'%',
        resizeMode: 'contain' 
    },
    
    bottom: {
        justifyContent: 'flex-end',
        alignItems: "center",
        width: wp('300%'),
        height: 7+'%',
        backgroundColor: "#139CFF"
    },
    text2:{
        alignItems: 'center',
        paddingBottom: 1.5+'%',
        alignItems:'center',
        justifyContent:'center'
    }
  });


  
  
export default Splash;