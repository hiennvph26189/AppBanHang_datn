import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import IconSearch from "react-native-vector-icons/FontAwesome"
import { useEffect } from 'react'

const Header = ({ title, show }) => {
  const navigation = useNavigation();
  const [showEditProfile, setShowEditProfile] = useState(false)
  const editProfile = () => {
    navigation.navigate('EditProfile')
  }

  useEffect(() => {
    setShowEditProfile(show)
  }, [show])
  return (
    <View style={{
      height: 70,
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      borderBottomWidth: 0.2,
      borderBottomColor: '#8e8e8e',
      backgroundColor: '#fff',
      paddingTop: 10
    }}>
      <Image
        style={{ width: 70, height: 50 }}
        source={require('../images/logo.png')}
      />
      <Text style={{
        fontWeight: '600',
        fontSize: 20,
        color: '#000',
        marginTop: 15,
        marginRight: 8
      }}>{title}</Text>
      <View style={{
        flexDirection: "row", marginTop: 10, marginRight: 20, justifyContent: 'center',
        alignItems: 'center'
      }}>
        <TouchableOpacity
        // onPress={()=>{searchProducts()}}
        >
          <View style={{ marginTop: 5, marginRight: 5 }}>
            {/* <IconSearch name="search" size={25} color="#000" /> */}
            <Icon name="magnify" color="#000" size={32} />
          </View>
        </TouchableOpacity>
        {showEditProfile ?
          <TouchableOpacity onPress={() => { editProfile() }}>
            <View style={{ paddingHorizontal: 10 }}>
              <Icon name="account-edit" size={31} color="#000" />
            </View>
          </TouchableOpacity>
          :
          null
        }

      </View>

    </View>
  )
}

export default Header;