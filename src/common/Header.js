import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = ({title}) => {
  return (
    <View style={{
        width: '100%',
        height:70,
        justifyContent:'space-between',
        alignItems: 'center',
        flexDirection:'row',
        borderBottomWidth:0.2,
        borderBottomColor:'#BeBeBe',
        backgroundColor: '#fff'}}>
        <Image
        style={{width:70, height:50}}
        source={require('../images/logo.png')}
        />
      <Text style={{
        fontWeight:'600',
        fontSize:20,
        color:'#000',
      }}>{title}</Text>
      <TouchableOpacity 
            style={{
                marginRight:20,
                justifyContent:'center',
                alignItems:'center',
                width:50,
                height:30,
            }}><Image source={require('../images/search.png')}
            style={{ width: 24, height: 24, tintColor: '#000',}}
            />
            
            </TouchableOpacity>
    </View>
  )
}

export default Header;