import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Dimensions,TouchableOpacity} from 'react-native';
import MenuIcon from './MenuIcon'
export default class MyHomeScreen extends Component{
    render() {
      return (
            
            <View style={styles.container}>
                <MenuIcon navigation = {this.props.navigation}/>
                <Text>HOME SCREEN</Text>
            </View>
      );
    }
}

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });