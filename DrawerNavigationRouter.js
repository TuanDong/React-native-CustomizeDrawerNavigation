import React, {Component} from 'react';
import {createAppContainer,createDrawerNavigator} from 'react-navigation'
import MyHomeScreen from './MyHomeScreen'
import LinkScreen from './LinkScreen'
import MenuDrawer from './MenuDrawer'
const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen: MyHomeScreen,
    },
    Link:{
        screen: LinkScreen,
    }
  },{
      initialRouteName:'Home',
      drawerPosition:'let',
      drawerBackgroundColor: '#7b8faf',
      drawerWidth:200,
      contentComponent:({navigation})=>{
        return(<MenuDrawer navigation={navigation}/>)
      },
      contentOptions:{
        activeTintColor:"#a59017",
        inactiveTintColor:'#f7f7f7'
      },
      navigationOptions :{
        activeTintColor:"#a59017",
        inactiveTintColor:'#f7f7f7'
      }
      

  });
  
export default MyApp = createAppContainer(MyDrawerNavigator);