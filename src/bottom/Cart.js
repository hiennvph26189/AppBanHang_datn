import { View, Text, FlatList, Alert, ScrollView, RefreshControl, Pressable, Linking } from 'react-native'
import React, { useState } from 'react'
import CartItem from '../common/CartItem';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import Header from '../common/Header'
import axios from 'axios';
import { GET_CART_USER, GET_ALLPRODUCTS, DELETE_CART_USER, UPDATE_CART_USER, ORDER_CART_USER, PROFILEMEMBER, IP, CHECK_SOLUONG_SP_THEOSIZE_TRONG_ODER } from '../../API';
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
  const [loaditemChill, setLoaditemChill] = useState(false)
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
        console.log(res.data.Carts+ ' cart');
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

  const checkId = (id) => {

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

  const orderProducts = async (cartList) => {
    let checkLeng = 0
    cartList.map((item, index) => {
      checkLeng = checkLeng + 1
    })
    console.log(checkLeng);
    if (checkLeng > 0) {

      let ids = []
      let tongTien = 0
      let arrTenSp = ""
      let id_sp = []
      cartList.map((item) => {
        ids.push(item.id)
        tongTien = tongTien + item.thanhTien
        arrProducts.map((product, index) => {
          if (item.ipSanPham === product.id) {
            arrTenSp += product.tenSp + ' (x' + item.soLuong + " size: " + item.size + ")" + "\n"
          }
        })
      })
      let postData = {
        cartList: JSON.stringify(cartList)
      }
      await axios.post(CHECK_SOLUONG_SP_THEOSIZE_TRONG_ODER, postData).then(res => {

        if (res.data.success == true) {
          navigation.navigate('ChiTietDonHangThanhToan', { postData: postData, arrTenSp: arrTenSp, tongTiens: tongTiens, IP: IP })
        } else {

          alert(res.data.message)
        }
      }).catch(err => { console.log(err) });

    } else {
      alert("Vui lòng chọn sản phẩm")
    }

  }

  const deleteCart = () => {

  }

  return (
    <View style={{ flex: 1 }}>

      <Header
        title={'Cart'}
      />

      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => { onRefresh() }}
          />
        }
      >
        {cartList.map((item, index) => {
          return (
            <CartItem key={item.id} item1={item} deteleItem={DeleteItemCart} checkid={checkId} tongTien={tongTiens} updateCart={updateCart} loaditemChill={loaditemChill}

            />
          )
        })}
      </ScrollView>


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
          }}>Tổng: </Text>
          <Text
            style={{
              color: 'red',
              fontSize: 17,
              fontWeight: 'bold',
            }}
          >{price(tongTiens)}</Text>
        </View>
        <View>
          <Pressable onPress={() => { orderProducts(cartList) }} style={{
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

          </Pressable>
        </View>
      </View>
      <View style={{ height: 80 }}></View>
    </View>
  );
};

export default Cart;