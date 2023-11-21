import {  View,SafeAreaView,ScrollView,RefreshControl,StyleSheet,Button,Pressable,Text } from "react-native";
import React, { useState,useEffect } from 'react';
import { useNavigation,useIsFocused } from "@react-navigation/native";
import { createNativeStackNavigator, } from '@react-navigation/native-stack';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import {useDispatch, useSelector} from 'react-redux';
import axios from "axios";
import Header from "../common/Header";

const Profile = () => {
  const [image,setImage] = useState('')
  return (
    <View>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container:{
      backgroundColor:"#FFFFF",
      flex:1
  },
  userInfoSectiom:{
     
      paddingHorizontal: 25,

     marginTop:5
  },
  title: {
      fontSize:22,
      fontWeight: 'bold',
  },
  caption:{
      fontSize:14,
      lineHeight:14,
      fontWeight: '500'
  },
  row:{
      flexDirection: 'row',
      marginBottom: 10
  },
  infoBoxWrapper: {
      borderBottomColor:'#dddddd',
      borderBottomWidth: 1,
      borderTopColor: '#dddddd',
      borderTopWidth: 1,
      flexDirection: 'row',
      height: 100
  },
  infoBox:{
      width: '50%',
      alignItems: 'center',
      justifyContent: 'center',
  },
  menuWrapper: {
      marginTop: 10
  },
  menuItem:{
      flexDirection: 'row',
      paddingHorizontal: 15,
      paddingVertical: 15,
      fontWeight: '600',
      lineHeight: 26,
      fontSize: 16
  },
  menuItemText:{
      color: '#777777',
      marginLeft:20,
      fontWeight: '600',
      fontSize: 16,
      lineHeight: 26
  }
  
})