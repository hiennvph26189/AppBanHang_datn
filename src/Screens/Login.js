import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { View, Text, Image, TextInput, Pressable, ToastAndroid } from 'react-native'
import CustomTextInput from '../common/CustomTextInput';
import CommonButton from '../common/CommonButton';
import { LOGIN } from '../../API';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {

  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badPasswd, setBadPasswd] = useState(false);
  const [showPassWord1, setShowPass1] = useState(true);
  const [err, setError] = useState(false);
  const [errMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    setError(false);
  }, [])

  const validate = () => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const data = {
      email: email,
      password: password
    }
    if (email || password) {
      if (reg.test(email) === true) {
        axios.post(LOGIN, data).then(res => {
          if (res.data.errCode === 0) {
            if (res.data.user.status !== 2) {
              setError(false)
              ToastAndroid.showWithGravity(
                'Chào mừng: ' + res.data.user.tenThanhVien,
                ToastAndroid.LONG,
                ToastAndroid.BOTTOM, 10, 100,
              );
              navigation.navigate('Home');
            } else {
              alert("Tài khoản của bạn đã bị khóa")
              return;
            }
          } else {
            setErrorMessage(res.data.message)
            setError(true)
          }
        }).catch(err => console.log(err))
      } else {
        ToastAndroid.showWithGravity(
          'Email không đúng định dạng',
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM, 10, 100,
        );
        setErrorMessage("Email không đúng định dạng")
        setError(true)
      }
    } else {
      ToastAndroid.showWithGravity(
        'Vui lòng nhập đầy đủ thông tin ',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM, 10, 100,
      );
      setErrorMessage("Email và password không được để trống")
      setError(true)
    }
  }
  const showPass1 = () => {
    setShowPass1(!showPassWord1)

  }
  return (
    <View style={{ flex: 1 }}>
      <Image
        source={require('../images/LogoChao.png')}
        style={{
          width: 60,
          height: 60,
          alignSelf: 'center',
          marginTop: 100
        }}
      />
      <Text style={{
        marginTop: 50,
        alignSelf: 'center',
        fontSize: 24,
        fontWeight: '600',
        color: '#000',
      }}>
        Login
      </Text>
      <CustomTextInput
        placeholder={'Xin Nhập Tài Khoản Email'}
        value={email}
        onChangeText={text => { setEmail(text); }}
        icon={require('../images/email.png')}
      />
      <View style={{ position: 'relative' }} >
        <CustomTextInput
          placeholder={'Xin Nhập Mật Khẩu'}
          value={password}
          onChangeText={text => { setPassWord(text); }}
          type={showPassWord1 ? 'password' : 'texxt'}
          icon={require('../images/pass.png')}
        />
        <Pressable style={{ position: 'absolute', right: 50, top: 44 }} onPress={() => showPass1()}>
          {showPassWord1 ?
            <Image
              style={{ width: 25, height: 25 }}
              source={require('../images/eye.png')}
            />
            :
            <Image
              style={{ width: 25, height: 25 }}
              source={require('../images/hidden.png')}
            />}
        </Pressable>
      </View>
      <CommonButton title={'Login'} bgColor={'#000'} textColor={'#fff'} onPress={() => {
        validate()
      }}></CommonButton>
      <Text
        style={{
          fontSize: 18,
          fontWeight: '800',
          alignSelf: 'center',
          marginTop: 20,
          textDecorationLine: 'underline',
        }} onPress={() => {
          navigation.navigate('Signup');
        }}>Create New Account?</Text>
    </View>
  )
}

export default Login