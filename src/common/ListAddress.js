import { View, Text,TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { GET_ADDRESS_MEMBERS } from '../../API';
import ItemAddress from './ItemAddress';
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { ScrollView } from 'react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import CustomHeader from './CustomHeader';

const ListAddress = (props) => {
  const navigation = useNavigation();
  const [address, setAddress] = useState([]);
  const isFocused = useIsFocused();
  const info = useSelector(state => state.Reducers.arrUser);


  const getAddress = async () => {
    await axios.get(`${GET_ADDRESS_MEMBERS}?id_members=${info.id}`).then((res) => {
      if (res.data.errCode === 0) {

        setAddress(res.data.listAddress)

      }
    }).catch((err) => { console.log(err) })
  }
  useEffect(() => {
    getAddress()
  }, [isFocused])

  const lodaData = () => {
    console.log('ok');
    getAddress()
  }
  return (
    <>
      <CustomHeader
        title={'Địa chỉ'} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={{ marginTop: 10 }}>
        {address && address.map((item) => {
          return (
            <ItemAddress
              key={item.id}
              item={item}
              loadData={lodaData}

            />
          )
        })}
        <TouchableOpacity
          onPress={() => { navigation.navigate('NewAddress') }}
          style={{
            backgroundColor: '#000',
            justifyContent: 'center',
            alignItems: 'center',
            width: '85%',
            height: 50,
            borderRadius: 20,
            alignSelf: 'center',
            marginTop: 20,
            marginBottom: 10
          }}>
          <Text style={{ fontSize: 16, color: '#fff', fontWeight: '600', }}>Thêm địa chỉ</Text>

        </TouchableOpacity>

      </ScrollView>
    </>
  );
};

export default ListAddress;