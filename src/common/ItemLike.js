import {  View, Text, Image, TouchableOpacity, Pressable, StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation, useIsFocused } from "@react-navigation/native";
import { useDispatch, useSelector } from 'react-redux';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import axios from 'axios';
import Icon from "react-native-vector-icons/Foundation"

const ItemLike = (props) => {
  return (
    <View>
        <Text>ItemLike</Text>
    </View>
  )
}

export default ItemLike