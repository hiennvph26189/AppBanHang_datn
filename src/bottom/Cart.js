import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CartItem from '../common/CartItem';
import { useSelector } from 'react-redux';

const Cart = () => {
  const [cartList, setCartList] = useState([]);
  const cartData = useSelector(state => state.Reducers);
  // const getTotal = () => {
  //   let tempTotal = 0;
  //   cartData.map(item => {
  //     tempTotal = tempTotal + item.price;
  //   });
  //   return tempTotal;
  // }
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={{
        width: '100%',
        height: 70,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        borderBottomWidth: 0.2,
        borderBottomColor: '#BeBeBe',
        backgroundColor: '#fff'
      }}>
        <Text style={{ fontSize: 16, fontWeight: 600, marginLeft: 10}}>
          Giỏ Hàng
        </Text>
      </View>
      <FlatList
        data={cartData}
        renderItem={({ item, index }) => {
          return (
            <CartItem
              item={item}
              onRemoveItem={() => {
                dispatch(removeFromCart(index))
              }}
            />
          );
        }}
      />

      <View style={{

        height: 50,
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 10,
        marginRight: 10,
        marginTop: 20,
        borderRadius: 5,
        padding: 10,
        justifyContent: 'space-between',

      }}>
        <View style={{
          flexDirection: 'row'
        }}>
          <Text style={{
            fontSize: 17,
            fontWeight: 'bold',
          }}>Tổng: 
          {/* {getTotal() + '$'}  */}
          </Text>
          <Text
            style={{
              color: 'red',
              fontSize: 17,
              fontWeight: 'bold',
            }}
          ></Text>
        </View>
        <View>
          <TouchableOpacity style={{
            borderColor: "#000",
            borderWidth: 1,
            height: 50,
            width: 130,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            backgroundColor: "#000",
          }}>
            <Text style={{
              color: "#fff",
              fontSize: 17,
              fontWeight: "bold",

            }}> Đặt Hàng</Text>

          </TouchableOpacity>
        </View>
      </View>
      <View style={{ height: 80 }}></View>


    </View>
  );
};

export default Cart;