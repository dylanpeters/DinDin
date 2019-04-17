import React, {Component} from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity,Dimensions, Animated} from 'react-native'
import icon from '../design/sliced/Illustration.png'
import dindintext from '../design/sliced/dindintext.png'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import I18n from 'react-native-i18n';

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

I18n.locale = 'ar';
I18n.translations = {
  en: {
    greeting: 'Get Started',
  },
  ar: {
    greeting: 'البدء',
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
                
                <FadeInView style = {styles.iconstyle}>
                    <Image source={icon} style={styles.image}/>
                </FadeInView>
                
                <View style = {styles.text1}>
                    <Image source={dindintext} style = {styles.dindin} />
                    {/* <Text style = {{fontSize: 32, letterSpacing: 1, color: "#808080" }}>DinDin</Text>
                    <Text style = {{fontStyle: "italic", color: "#808080"}}>connecting food lovers</Text> */}
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
  
    },
    iconstyle: {
        
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: wp("30%"),
        height: hp("10%"),
        paddingTop: hp("10%"),
    },
    image: {
        flex: 1,
        // width: wp("30%"),
        // height: hp("50%"),
        resizeMode: 'contain' 

    },

    text1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 10,
        width: 50,
        height: 50,

    },

    dindin: {
        flex: 1,
        width: wp('50%'),
        height: hp("50%"),
        resizeMode: 'contain' 
    },
    
    bottom: {
        flex: 0,
        justifyContent: 'flex-end',
        alignItems: "center",
        width: wp('300%'),
        height: 50,
        backgroundColor: "#139CFF"
    },
    text2:{
        flex: 0,
        alignItems: 'center',
        paddingBottom: 15,
    }
  });


  
  
export default Splash;