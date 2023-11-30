import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import CartItem from '../common/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Header from '../common/Header'
import axios from 'axios';
import { GET_CART_USER, GET_ALLPRODUCTS, DELETE_CART_USER, UPDATE_CART_USER, ORDER_CART_USER, PROFILEMEMBER } from '../../API';
import { useEffect } from 'react';

const Cart = (props) => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const info = useSelector(state => state.Reducers.arrUser);
  const [cartList, setCartList] = useState([]);
  const [checkOrder, setCheckedOrder] = useState(false)
  const [load, setIsLoadding] = useState(false)
  const [arrProducts, setArrProducts] = useState()
  const [tongTiens, setTongTien] = useState(0)
  const [profile, setProfile] = useState({})
  const [idCart, setIdCart] = useState([])
  const [buy9Pay, setBuy9Pay] = useState({})
  const [token, setToken] = useState("")
  const cartData = useSelector(state => state.Reducers);

  ////////////////////////////////
  const getUser = () => {
    let data = {
      id: info.id,
    }
    axios.post(PROFILEMEMBER, data).then((response) => {

      if (response.data.errCode === 0) {

        setProfile({ ...response.data.userMember })

      }
    }).catch((error) => { console.log(error) });
  }

  const loadAllProducts = async (id) => {
    await axios.get(GET_ALLPRODUCTS).then((res) => {

      if (res && res.data.errCode === 0) {

        setArrProducts(res.data.totalProducts)

        setRefreshing(false)
      }
    }).catch((error) => { console.log(error) });
  }

  const price = (price) => {
    let x = price;
    x = x.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
    return x;
  }

  const listCart = async () => {
    if (info.id) {
      let idUser = info.id;
      await axios.get(`${GET_CART_USER}?id=${idUser}`).then(res => {

        if (res.data.errCode == 0) {
          setCartList(res.data.Carts)

          tongTien(res.data.Carts)
          setRefreshing(false)
        }
      }).catch((error) => { console.log(error) });
    }
  }

  const DeleteItemCart = async (id) => {

    await axios.delete(`${DELETE_CART_USER}?id=${id}`).then(res => {
      if (res.data.errCode === 0) {
        listCart()
        props.deleteCart()
      }
    }).catch(err => { console.log(err) });
  }

  useEffect(() => {
    listCart()
    getUser()
    loadAllProducts()


  }, [isFocused])

  onRefresh = () => {
    setRefreshing(true)
    listCart()
    loadAllProducts()
  }

  const tongTien = (arr) => {
    let tien = 0
    arr.map((item) => {
      tien = tien + item.thanhTien

    })

    setTongTien(tien)


  }

  const updateCart = async (id, sl, size) => {
    let data = {
      id: id,
      soLuong: sl,
      size: size
    }
    await axios.put(UPDATE_CART_USER, data).then(res => {
      if (res.data.errCode === 0) {
        listCart()
      }
    }).catch(err => { console.log(err) });
  }

  const deleteCart = () => {

  }

  return (
    <View style={{ flex: 1 }}>
      
      <Header 
        title={'Cart'}
      />

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
          </Text>
          <Text
            style={{
              color: 'red',
              fontSize: 17,
              fontWeight: 'bold',
            }}
          >{price(tongTiens)}</Text>
        </View>
        <View>
          <TouchableOpacity
            // onPress={() => { orderProducts() }} 
            style={{
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