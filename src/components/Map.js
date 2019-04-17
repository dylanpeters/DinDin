import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants, MapView, Location, Permissions } from 'expo';
import InvitationDetails from './InvitationDetails.js'

export default class Map extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            mapRegion: null,
            locationResult: null,
            latitude:null,
            longitude:null,
            error: null,
        }
    }

  componentDidMount() {
    this._getLocationAsync();
  }

  _handleMapRegionChange = mapRegion => {
    console.log(mapRegion);
    this.setState({ mapRegion });
  };

  _getLocationAsync = async () => {

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ locationResult: JSON.stringify(location) });
    this.setState({mapRegion: { latitude: location.coords.latitude, longitude: location.coords.longitude, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }});
    this.setState({latitude: location.coords.latitude, longitude: location.coords.longitude})

  };

  render() {
    return this.state.latitude !== null &&(
        <View style = {styles.container}>
            <View style = {styles.backgroundContainer}>
                <MapView
                    style={styles.mapStyle}
                    region={this.state.mapRegion}
                    onRegionChange={this._handleMapRegionChange}
                >
                <MapView.Marker
                    coordinate={{latitude: 38.035951,
                    longitude:  -78.500889}}
                    title={"Bodo's Bagels"}
                    //description={}
                />
                <MapView.Marker
                    coordinate={{latitude: this.state.latitude,
                    longitude:  this.state.longitude}}
                    title={"You"}
                    //description={}
                />
                </MapView>
            </View>

            <InvitationDetails/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },

  backgroundContainer:{
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },

  mapStyle:{
    height: 100+'%',
    width: 100+'%',
  }
});