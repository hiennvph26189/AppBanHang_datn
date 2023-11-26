import { View, Text } from 'react-native'
import React from 'react'
import CustomHeader from './CustomHeader';

const ListProducts = (props) => {
  return (
    <>
    <CustomHeader 
    title={'Danh sách sản phẩm'}
    />
    <View>
      <Text>ListProducts</Text>
    </View>
    </>
  );
};

export default ListProducts;