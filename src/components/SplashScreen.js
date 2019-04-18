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
            
             <View style = {styles.iconcontainer}>
                    <View style = {styles.toprow}>
                        <FadeInView >
                            <Image source={purpleGuy} />     
                        </FadeInView> 
                    </View>
                    <View style = {styles.middlerow}>
                        <FadeInView>
                            <Image source={orangeGirl} />
                        </FadeInView>
                    </View>
                    <View style = {styles.bottomrow}>
                        <FadeInView >
                            <Image source={greenGirl} />
                        </FadeInView>
                    </View>

                </View>
                <View style = {styles.background}>
                    <View style = {styles.backgroundContainer}>
                            <View style = {styles.backgroundContainer}>
                                <View style = {styles.backgroundContainer}>
                                    <View style = {styles.backgroundContainer}>
                                        <Image source={logo} style={styles.circleImage}/>  
                                    </View>
                                    <Image source={oval3} style={styles.circleImage}/>  
                                </View>
                                <Image source={oval2} style={styles.circleImage}/>
                            </View>
                            <Image source={oval1} style={styles.circleImage}/>
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

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //display: 'flex',
      alignItems: 'center',
      //justifyContent: 'center',
  
    },
    background:{
        //flexDirection: 'column',
        flex:1,
        paddingTop: 30,
        // position: 'absolute',
        // width:50+'%',
        // height:50+'%',
        backgroundColor:'blue'

    },
    backgroundContainer: {
        //paddingTop: 30+'%',
        justifyContent:'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        top: 0,
        right: 0,
        left: 0,
        //resizeMode:'contain',

       

        
    },
    circleImage:{
        flex:1,
        resizeMode: 'contain',
        // width:20+'%',
        // height:20+'%',
     

    },
    iconcontainercontainer:{
        justifyContent:'center',
        alignItems:'center',
    },
    iconcontainer:{
        justifyContent: 'center',
        flexDirection:'column',
        position: 'absolute',

        width: 300,
        height: 100+'%',
        paddingBottom:30+'%',
    },
    toprow:{
        flexDirection: 'row',
        paddingLeft: 60+'%',
    },
    middlerow:{
        flexDirection: 'row',
        paddingLeft: 10+'%'
    },
    bottomrow:{
        flexDirection:'row',
        paddingLeft: 60+'%',
    },
 
    image2: {
        flex: 1,

        resizeMode: 'contain',
        zIndex: 1,
        position: "absolute",
    },

    text1: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 100+'%',
        height: 20+'%',
        paddingBottom: 30,

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
        paddingBottom: 1+'%',
        alignItems:'center',
        justifyContent:'center'
    }
  });


  
  
export default Splash;