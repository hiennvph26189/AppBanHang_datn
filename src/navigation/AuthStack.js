import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Splash from '../Screens/Splash';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import Home from '../Screens/Home';
import ProductDetail from '../common/ProductDetail';
import ListProducts from '../common/ListProducts';
import Main from '../bottom/Main';

import RePass from '../edit/RePass';
import HistoryBuy from '../edit/HistoryBuy';
import NewsPaperDetail from '../edit/NewsPaperDetail';
import Contact from '../bottom/Contact';
import EditProfile from '../edit/EditProfile';
import DangXuLy from '../edit/DangXuLy';
import DangGiaoHang from '../edit/DangGiaoHang';
import GiaoThanhCong from '../edit/GiaoThanhCong';
import DonHuy from '../edit/DonHuy';
import OrderDetail from '../edit/OrderDetail';
import NewAddress from '../edit/NewAddress';
import ListAddress from '../common/ListAddress';
import EditAddress from '../edit/EditAddress';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import ChiTietDonHangThanhToan from '../common/ChiTietDonHangThanhToan';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
const Stack = createStackNavigator();
const AuthStack = () => {
    const [infoUser, setInfoUser] = useState({})
    const info = useSelector(state => state.Reducers.arrUser);
    const isloading = useSelector(state => state.Reducers.isloading);
    const isFocused = useIsFocused()
    const getMember = async () => {
        await axios.get(`${GET_ONE_MEMBER}?id=${info.id}`).then((res) => {
            if (res.data.errCode === 0) {
                setInfoUser(res.data.member)
            }
        }).catch((err) => { console.log(err) })
    }
    useEffect(() => {
        getMember()
    }, [isFocused])
  return (
    <NavigationContainer>
        <Stack.Screen options={{ headerShown: false }} name='Home' component={Home} />
                <Stack.Screen options={{ headerShown: false }} name='Splash' component={Splash} />
                <Stack.Screen options={{ headerShown: false }} name='Login' component={Login} />
                <Stack.Screen options={{ headerShown: false }} name='Signup' component={Signup} />
                <Stack.Screen options={{ headerShown: false }} name='Main' component={Main} />
                <Stack.Screen options={{ headerShown: false }} name='ListProducts' component={ListProducts} />
                <Stack.Screen options={{ headerShown: false }} name='ProductDetail' component={ProductDetail} />
                <Stack.Screen options={{ headerShown: false }} name='EditProfile' component={EditProfile} />
                <Stack.Screen options={{ headerShown: false }} name='RePasswd' component={RePass} />
                <Stack.Screen options={{ headerShown: false }} name='History' component={HistoryBuy} />
                <Stack.Screen options={{ headerShown: false }} name='NewsDetail' component={NewsPaperDetail} />
                <Stack.Screen options={{ headerShown: false }} name='Contact' component={Contact} />
                <Stack.Screen options={{ headerShown: false }} name='OrderDetail' component={OrderDetail} />
                <Stack.Screen options={{ headerShown: false }} name='ChiTietDonHangThanhToan' component={ChiTietDonHangThanhToan} />
                <Stack.Screen options={{ headerShown: false }} name='DangXuLy' component={DangXuLy} />
                <Stack.Screen options={{ headerShown: false }} name='DangGiaoHang' component={DangGiaoHang} />
                <Stack.Screen options={{ headerShown: false }} name='GiaoThanhCong' component={GiaoThanhCong} />
                <Stack.Screen options={{ headerShown: false }} name='DonHuy' component={DonHuy} />
                <Stack.Screen options={{ headerShown: false }} name='NewAddress' component={NewAddress} />
                <Stack.Screen options={{ headerShown: false }} name='ListAddress' component={ListAddress} />
                <Stack.Screen options={{ headerShown: false }} name='EditAddress' component={EditAddress} />
    </NavigationContainer>
  )
}

export default AuthStack