import React, { Component } from 'react'
import { View,Text,Image,StyleSheet,TouchableOpacity } from 'react-native'

export default class MenuDrawer extends Component {
    menuLink(nav,text){
        return(
            <TouchableOpacity
            onPress = {()=>{this.props.navigation.navigate(nav)}}
            >
                <Text style={styles.link}>{text}</Text>
            </TouchableOpacity>
        )
    }
    render() {
      return (
        <View style={styles.container}>
            <TouchableOpacity
            style={{width:30,height:30,zIndex:1,position:'absolute',top:10,right:10}}
            onPress= {()=>{this.props.navigation.closeDrawer();}}
            >
            <Image
                source={require('./image/icons8-menu-480.png')}
                style={{width:30,height:30,}}
                
            />
        </TouchableOpacity>
          <View style={styles.topLink}>
            <Image 
            source={require('./image/man.png')}
            style ={{ width:100,height:100}}
            />
            <Text style={{fontSize:10,fontWeight:'bold',paddingTop:20}}>Hello UserName</Text>
          </View>
          <View style={styles.bottomLink}>
            {this.menuLink('Home','Home')}
            {this.menuLink('Link','Link')}
          </View>
        </View>
      )
    }
}
 const styles = StyleSheet.create({
     container:{
        flex:1,
        backgroundColor:'#678c7c'
     },
    topLink:{
        height: 200,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#fff'
    },
    bottomLink:{
        flex:1,
    },
    link:{
        fontSize:18,
        textAlign:'left',
        paddingTop:20,
        paddingLeft:10
    }
 });