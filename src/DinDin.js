import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';


import SplashScreen from "./components/SplashScreen.js"
import HomeScreen from "./components/HomeScreen.js"

const MainStack = createSwitchNavigator({
    splash: {
        screen: SplashScreen
    },
    home:{
        screen: HomeScreen
    },
    login:{
       screen: HomeScreen
    }
    
   
});
const App = createAppContainer(MainStack);

class DinDin extends Component {
    render(){
        return(
            <App  persistenceKey={"NavigationState"}/>
        )
    }
}

//
export default DinDin;