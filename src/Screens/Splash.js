import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from "@react-navigation/native";

const Splash = (props) => {
  const navigation = props.navigation;
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3000);
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Image
        source={require('../images/banner.png')}
        style={{
          width: 150,
          height: 150,
          borderRadius: 70,
          resizeMode: 'center',
        }}
      />
    </View>
  )

};

export default Splash