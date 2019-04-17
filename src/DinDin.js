import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {createStackNavigator, createAppContainer, createSwitchNavigator} from 'react-navigation';


import SplashScreen from "./components/SplashScreen.js"
import HomeScreen from "./components/HomeScreen.js"
import Invitation from "./components/Invitation.js"
import Carousel2 from "./components/Carousel.js"
import Details from "./components/Details.js"

const MainStack = createStackNavigator({
    splash: {
        screen: SplashScreen
    },
    home:{
        screen: HomeScreen
        
    },
    login:{
         screen: HomeScreen
    },
    // Carousel:{
    //     screen: Carousel
    // },
    carousel:{
        screen: Carousel2
    },

    invitation:{
        screen: Invitation
    },
    details: {
        screen: Details
    }
   
},
{
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    }
   }
   
);

const App = createAppContainer(MainStack);

class DinDin extends Component {
    
    render(){
        return(
            <App  />
        )
    }
}

//  persistenceKey={"NavigationStat"}
export default DinDin;