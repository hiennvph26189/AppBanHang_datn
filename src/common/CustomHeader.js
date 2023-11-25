import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CustomHeader = ({title}) => {
    const navigation = useNavigation();

    const goBack = ()=>{
        navigation.goBack();
    }
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
            <TouchableOpacity 
            style={{
                marginRight:20,
                justifyContent:'center',
                alignItems:'center',
                width:50,
                height:30,
                
            }}
            onPress={() => {
                goBack();
            }}
            ><Image source={require('../images/back.png')}
            style={{ width: 24, height: 24, tintColor: '#000',}}
            />
            </TouchableOpacity>
        
      <Text style={{
        fontWeight:'600',
        fontSize:20,
        color:'#000',
      }}>{title}</Text>
      
            <Image
        style={{width:70, height:50}}
        source={require('../images/logo.png')}
        />
            </View>
  );
};

export default CustomHeader;