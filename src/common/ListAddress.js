import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { GET_ADDRESS_MEMBERS } from '../../API';
import ItemAddress from './ItemAddress';
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const ListAddress = (props) => {
  const navigation = useNavigation();
  const [address, setAddress] = useState([]);
  const info = useSelector(state => state.Reducers.arrUser);
  console.log(info.id + 'iiii');

  const getAddress = async () => {
    await axios.get(`${GET_ADDRESS_MEMBERS}?id_members=${info.id}`).then((res) => {
      if (res.data.errCode === 0) {

        setAddress(res.data.listAddress)
        console.log(res.data.listAddress + 'jjadfs');

      }
    }).catch((err) => { console.log(err) })
  }
  useEffect(() => {
    getAddress()
  }, [])
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      style={{ marginTop: 20 }}>
      {address && address.map((item) => {
        return (
          <ItemAddress
            key={item.id}
            item={item}

          />
        )
      })}
      <TouchableOpacity
        onPress={() => {navigation.navigate('NewAddress') }}
        style={{
          backgroundColor: '#000',
          justifyContent: 'center',
          alignItems: 'center',
          width: '85%',
          height: 50,
          borderRadius: 20,
          alignSelf: 'center',
          marginTop: 30,
        }}>
        <Text style={{ fontSize: 16, color: '#fff', fontWeight: '600' }}>Thêm địa chỉ</Text>
        
      </TouchableOpacity>

    </ScrollView>
  );
};

export default ListAddress;